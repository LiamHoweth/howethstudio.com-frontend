"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

type Release = {
  releaseVersion: string;
  status: "draft" | "published" | "rolled_back";
  checksum: string;
  compatibleClient: { minimum: string; maximum: string | null };
  publishedAt: string | null;
};

type ValidationReport = {
  valid: boolean;
  errors: string[];
  releaseVersion?: string;
  counts?: Record<string, number>;
  preview?: {
    featuredClubs: Array<{ id: string; name?: string }>;
    featuredSituations: Array<{ id: string }>;
    featuredEvents: Array<{ id: string }>;
  } | null;
};

type Operations = {
  summary: {
    accounts: number;
    activeSessions: number;
    careerSlots: number;
    pendingConflicts: number;
    activeEntitlements: number;
    analyticsEvents24h: number;
    unprocessedWebhooks: number;
    publishedRelease: string | null;
  } | null;
  actions: Array<{
    action: string;
    resourceId: string;
    createdAt?: string;
  }>;
  generatedAt: string;
};

const apiOrigin = process.env.NEXT_PUBLIC_API_ORIGIN ?? "https://api.howethstudio.com";

export function ElevenwardAdmin() {
  const [credentials, setCredentials] = useState<string | null>(null);
  const [releases, setReleases] = useState<Release[]>([]);
  const [bundle, setBundle] = useState<Record<string, unknown> | null>(null);
  const [fileName, setFileName] = useState("");
  const [report, setReport] = useState<ValidationReport | null>(null);
  const [operations, setOperations] = useState<Operations | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const request = useCallback(async (path: string, init: RequestInit = {}, explicitCredentials?: string) => {
    const auth = explicitCredentials ?? credentials;
    if (!auth) throw new Error("Sign in is required.");
    const response = await fetch(`${apiOrigin}/v1/elevenward${path}`, {
      ...init,
      headers: {
        authorization: `Basic ${auth}`,
        ...(init.body ? { "content-type": "application/json" } : {}),
        ...init.headers,
      },
    });
    const body = response.status === 204 ? null : await response.json().catch(() => null);
    if (!response.ok) throw new Error(body?.error ?? `Request failed (${response.status}).`);
    return body;
  }, [credentials]);

  const refresh = useCallback(async (explicitCredentials?: string) => {
    const [releaseResult, operationsResult] = await Promise.all([
      request("/admin/content/releases", {}, explicitCredentials),
      request("/admin/operations", {}, explicitCredentials),
    ]);
    setReleases(releaseResult.releases ?? []);
    setOperations(operationsResult);
  }, [request]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const encoded = btoa(`${form.get("username")}:${form.get("password")}`);
    setBusy(true);
    setMessage("");
    try {
      await refresh(encoded);
      setCredentials(encoded);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Authentication failed.");
    } finally {
      setBusy(false);
    }
  }

  async function selectBundle(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setReport(null);
    setMessage("");
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") throw new Error("Bundle root must be an object.");
      setBundle(parsed);
      setFileName(file.name);
    } catch (error) {
      setBundle(null);
      setFileName("");
      setMessage(error instanceof Error ? error.message : "The file is not valid JSON.");
    }
  }

  async function inspect(mode: "validate" | "preview") {
    if (!bundle) return;
    setBusy(true);
    setMessage("");
    try {
      const result = await request(`/admin/content/${mode}`, { method: "POST", body: JSON.stringify(bundle) });
      setReport(result);
      setMessage(result.valid ? `Bundle ${result.releaseVersion} passed validation.` : "Validation failed.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Validation failed.");
    } finally {
      setBusy(false);
    }
  }

  async function createRelease() {
    if (!bundle || !report?.valid) return;
    setBusy(true);
    setMessage("");
    try {
      const result = await request("/admin/content/releases", { method: "POST", body: JSON.stringify(bundle) });
      setMessage(`Draft ${result.releaseVersion} was signed and stored.`);
      await refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Release creation failed.");
    } finally {
      setBusy(false);
    }
  }

  async function changeRelease(version: string, action: "publish" | "rollback") {
    setBusy(true);
    setMessage("");
    try {
      await request(`/admin/content/releases/${encodeURIComponent(version)}/${action}`, { method: "POST" });
      setMessage(action === "publish" ? `${version} is now live.` : `Live content rolled back to ${version}.`);
      await refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Release update failed.");
    } finally {
      setBusy(false);
    }
  }

  if (!credentials) {
    return <main className="ew-admin ew-admin--signin">
      <section>
        <p className="ew-kicker">ELEVENWARD · STAFF ONLY</p>
        <h1>Content operations</h1>
        <p>Authenticate against the protected production API. Credentials stay in this tab’s memory and are never embedded in the site.</p>
        <form onSubmit={signIn}>
          <label><span>Staff username</span><input autoComplete="username" name="username" required /></label>
          <label><span>Password</span><input autoComplete="current-password" name="password" required type="password" /></label>
          <button disabled={busy} type="submit">{busy ? "CHECKING…" : "ENTER CONSOLE"}</button>
        </form>
        <p className="ew-admin__message" role="status">{message}</p>
      </section>
    </main>;
  }

  return <main className="ew-admin">
    <header>
      <div><p className="ew-kicker">ELEVENWARD · CONTENT OPERATIONS</p><h1>Release console</h1></div>
      <button className="ew-admin__quiet" onClick={() => { setCredentials(null); setBundle(null); setReport(null); }}>SIGN OUT</button>
    </header>
    <p className="ew-admin__message" role="status" aria-live="polite">{message}</p>
    <section className="ew-admin__panel ew-admin__operations">
      <div className="ew-admin__release-head"><div><span className="ew-admin__step">LIVE · OPERATIONS</span><h2>Service pulse</h2></div><span className={`ew-admin__health ${(operations?.summary?.pendingConflicts ?? 0) > 0 || (operations?.summary?.unprocessedWebhooks ?? 0) > 0 ? "has-attention" : "is-clear"}`}>{(operations?.summary?.pendingConflicts ?? 0) > 0 || (operations?.summary?.unprocessedWebhooks ?? 0) > 0 ? "ATTENTION" : "CLEAR"}</span></div>
      {operations?.summary ? <dl className="ew-admin__counts">{[
        ["Accounts", operations.summary.accounts],
        ["Active sessions", operations.summary.activeSessions],
        ["Career slots", operations.summary.careerSlots],
        ["Pending conflicts", operations.summary.pendingConflicts],
        ["Entitlements", operations.summary.activeEntitlements],
        ["Events · 24h", operations.summary.analyticsEvents24h],
        ["Webhook backlog", operations.summary.unprocessedWebhooks],
        ["Live content", operations.summary.publishedRelease ?? "None"],
      ].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> : <p>Operational summary unavailable.</p>}
      {operations?.actions.length ? <div className="ew-admin__activity"><strong>Recent staff changes</strong><ul>{operations.actions.slice(0, 5).map((action, index) => <li key={`${action.action}-${action.resourceId}-${index}`}><span>{action.action.replaceAll("_", " ")}</span><code>{action.resourceId}</code>{action.createdAt ? <time dateTime={action.createdAt}>{new Date(action.createdAt).toLocaleString()}</time> : null}</li>)}</ul></div> : null}
    </section>
    <div className="ew-admin__grid">
      <section className="ew-admin__panel">
        <span className="ew-admin__step">01 · BUNDLE</span>
        <h2>Choose authored content</h2>
        <label className="ew-admin__drop">
          <input accept="application/json,.json" onChange={selectBundle} type="file" />
          <strong>{fileName || "Select a JSON content bundle"}</strong>
          <span>Only data and media references are accepted. Executable rules remain in the app.</span>
        </label>
        <div className="ew-admin__actions">
          <button disabled={busy || !bundle} onClick={() => inspect("validate")}>VALIDATE</button>
          <button disabled={busy || !bundle} onClick={() => inspect("preview")}>PREVIEW</button>
        </div>
      </section>
      <section className="ew-admin__panel">
        <span className="ew-admin__step">02 · REPORT</span>
        <h2>{report ? (report.valid ? "Ready to stage" : "Blocked") : "Awaiting validation"}</h2>
        {report?.counts ? <dl className="ew-admin__counts">{Object.entries(report.counts).map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl> : null}
        {report?.errors?.length ? <ul className="ew-admin__errors">{report.errors.map((error) => <li key={error}>{error}</li>)}</ul> : null}
        {report?.preview ? <div className="ew-admin__preview"><strong>Preview sample</strong><p>{[...report.preview.featuredClubs, ...report.preview.featuredSituations, ...report.preview.featuredEvents].map((item) => "name" in item && item.name ? item.name : item.id).join(" · ")}</p></div> : null}
        <button disabled={busy || !report?.valid} onClick={createRelease}>SIGN &amp; STORE DRAFT</button>
      </section>
    </div>
    <section className="ew-admin__panel ew-admin__releases">
      <div className="ew-admin__release-head"><div><span className="ew-admin__step">03 · RELEASES</span><h2>Published history</h2></div><button className="ew-admin__quiet" disabled={busy} onClick={() => refresh()}>REFRESH</button></div>
      {releases.length === 0 ? <p>No content releases yet.</p> : <div className="ew-admin__table-wrap"><table><thead><tr><th>Version</th><th>Clients</th><th>Checksum</th><th>Status</th><th>Action</th></tr></thead><tbody>{releases.map((release) => <tr key={release.releaseVersion}><td><strong>{release.releaseVersion}</strong></td><td>{release.compatibleClient.minimum}–{release.compatibleClient.maximum ?? "latest"}</td><td><code>{release.checksum.slice(7, 19)}…</code></td><td><span className={`ew-admin__status is-${release.status}`}>{release.status}</span></td><td>{release.status === "published" ? <span>LIVE</span> : <div className="ew-admin__row-actions">{release.status === "draft" ? <button disabled={busy} onClick={() => changeRelease(release.releaseVersion, "publish")}>PUBLISH</button> : <button className="ew-admin__quiet" disabled={busy} onClick={() => changeRelease(release.releaseVersion, "rollback")}>ROLL BACK TO THIS</button>}</div>}</td></tr>)}</tbody></table></div>}
    </section>
  </main>;
}
