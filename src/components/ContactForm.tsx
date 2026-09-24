"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendMessage } from "@/app/actions";
import { initialContactState, type ContactFields } from "@/lib/contact";
import { profile } from "@/data/resume";
import { ArrowRightIcon, CheckIcon } from "./Icons";

function mailtoFor(fields: ContactFields) {
  const body = `${fields.message}\n\n—\n${fields.name}\n${fields.email}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(
    fields.subject,
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  // With no mail provider configured the server hands the message back so we can
  // pass it to the visitor's own email client — nothing is silently dropped.
  useEffect(() => {
    if (state.status === "unconfigured") {
      window.location.href = mailtoFor(state.values);
    }
  }, [state]);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const fieldClass = (name: keyof ContactFields) =>
    `field ${state.errors[name] ? "field-invalid" : ""}`;

  const describedBy = (name: keyof ContactFields) =>
    state.errors[name] ? `${name}-error` : undefined;

  return (
    <form ref={formRef} action={formAction} className="card p-6 sm:p-7" noValidate>
      <h3 className="text-[1.05rem] font-semibold">Send a message</h3>
      <p className="muted mt-1.5 text-[0.88rem]">
        Fill this in and it lands straight in my inbox. I reply to everything.
      </p>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            defaultValue={state.values.name}
            placeholder="Your name"
            aria-invalid={Boolean(state.errors.name)}
            aria-describedby={describedBy("name")}
            className={fieldClass("name")}
          />
          {state.errors.name ? (
            <p id="name-error" className="error-text">
              {state.errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            defaultValue={state.values.email}
            placeholder="you@company.com"
            aria-invalid={Boolean(state.errors.email)}
            aria-describedby={describedBy("email")}
            className={fieldClass("email")}
          />
          {state.errors.email ? (
            <p id="email-error" className="error-text">
              {state.errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          defaultValue={state.values.subject}
          placeholder="Role opportunity, collaboration, question…"
          aria-invalid={Boolean(state.errors.subject)}
          aria-describedby={describedBy("subject")}
          className={fieldClass("subject")}
        />
        {state.errors.subject ? (
          <p id="subject-error" className="error-text">
            {state.errors.subject}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={4000}
          defaultValue={state.values.message}
          placeholder="Tell me a little about what you have in mind…"
          aria-invalid={Boolean(state.errors.message)}
          aria-describedby={describedBy("message")}
          className={`${fieldClass("message")} resize-y`}
        />
        {state.errors.message ? (
          <p id="message-error" className="error-text">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? (
            <>
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                aria-hidden="true"
              />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>

        <p aria-live="polite" role="status" className="text-[0.86rem]">
          {state.status === "success" ? (
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
              <CheckIcon className="h-4 w-4" />
              {state.message}
            </span>
          ) : null}
          {state.status === "error" ? (
            <span className="font-medium text-red-600 dark:text-red-400">
              {state.message}
            </span>
          ) : null}
          {state.status === "unconfigured" ? (
            <span className="muted">
              {state.message}{" "}
              <a href={mailtoFor(state.values)} className="underline">
                Click here
              </a>{" "}
              if nothing opened.
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
