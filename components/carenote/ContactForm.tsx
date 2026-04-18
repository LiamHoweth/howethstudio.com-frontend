"use client";

import { useState } from "react";
import Link from "next/link";
import { careNoteConfig } from "@/lib/siteConfig";

type FormState = "idle" | "pending" | "success" | "error";

function setFormStatus(
  setState: (s: { text: string; state: FormState }) => void,
  text: string,
  state: FormState
) {
  setState({ text, state });
}

export function ContactForm() {
  const [status, setStatus] = useState<{ text: string; state: FormState }>({
    text: "",
    state: "idle",
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = `${formData.get("name") || ""}`.trim();
    const email = `${formData.get("email") || ""}`.trim();
    const subject = `${formData.get("subject") || ""}`.trim();
    const message = `${formData.get("message") || ""}`.trim();

    if (!name || !email || !subject || !message) {
      setFormStatus(setStatus, "Fill out every field before sending.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus(setStatus, "Use a valid email address.", "error");
      return;
    }

    const endpoint = careNoteConfig.supportFormEndpoint;

    if (!endpoint) {
      const mailtoSubject = encodeURIComponent(`[CareNote CNA] ${subject}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:${careNoteConfig.supportEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setFormStatus(
        setStatus,
        "Your email app has been opened with your message.",
        "success"
      );
      return;
    }

    setFormStatus(setStatus, "Sending message...", "pending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        throw new Error(`Unexpected status: ${response.status}`);
      }

      form.reset();
      setFormStatus(
        setStatus,
        "Message sent. Someone should respond within 2 business days.",
        "success"
      );
    } catch {
      setFormStatus(
        setStatus,
        `We could not send your message right now. Please email ${careNoteConfig.supportEmail}.`,
        "error"
      );
    }
  }

  const dataState: "pending" | "success" | "error" | undefined =
    status.state === "idle"
      ? undefined
      : status.state === "pending"
        ? "pending"
        : status.state === "success"
          ? "success"
          : "error";

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-grid">
        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Subject
        <input type="text" name="subject" required />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <div className="hero-actions">
        <button className="button button-primary" type="submit">
          Send message
        </button>
        <Link className="button button-secondary" href="/carenote-cna/support/">
          Read FAQs
        </Link>
      </div>
      <p
        className="form-status"
        {...(dataState ? { "data-state": dataState } : {})}
        aria-live="polite"
        suppressHydrationWarning
      >
        {status.text}
      </p>
    </form>
  );
}
