"use client";

import { FormEvent, useState } from "react";
import type { ElevenwardDetails } from "./content";

const apiOrigin = process.env.NEXT_PUBLIC_API_ORIGIN ?? "https://api.howethstudio.com";

export function ElevenwardDeletionForm({ copy }: { copy: ElevenwardDetails["deletionForm"] }) {
  const [accountId, setAccountId] = useState("");
  const [code, setCode] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[0-9a-f-]{36}$/i.test(accountId.trim()) || !/^\d{6}$/.test(code.trim())) {
      setState("error");
      return;
    }
    setState("submitting");
    try {
      const response = await fetch(`${apiOrigin}/v1/elevenward/account/deletion-confirm`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ accountId: accountId.trim(), deletionCode: code.trim() }),
      });
      setState(response.status === 204 ? "success" : "error");
      if (response.status === 204) {
        setAccountId("");
        setCode("");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <form className="ew-deletion-form" onSubmit={submit}>
      <div>
        <p className="ew-kicker">SECURE DELETION</p>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </div>
      <label>
        <span>{copy.accountId}</span>
        <input autoComplete="off" inputMode="text" required value={accountId} onChange={(event) => setAccountId(event.target.value)} placeholder="00000000-0000-0000-0000-000000000000" />
      </label>
      <label>
        <span>{copy.code}</span>
        <input autoComplete="one-time-code" inputMode="numeric" maxLength={6} pattern="[0-9]{6}" required value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, ""))} placeholder="000000" />
      </label>
      <button disabled={state === "submitting"} type="submit">{copy.submit}</button>
      <p className={`ew-form-status is-${state}`} role="status" aria-live="polite">
        {state === "success" ? copy.success : state === "error" ? copy.error : ""}
      </p>
    </form>
  );
}
