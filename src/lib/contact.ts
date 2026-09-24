/**
 * Shared contact-form types and validation.
 *
 * Kept out of `app/actions.ts` on purpose: a `"use server"` module may only
 * export async functions, so plain constants have to live somewhere else.
 */

export type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactState = {
  status: "idle" | "success" | "error" | "unconfigured";
  message: string;
  errors: Partial<Record<keyof ContactFields, string>>;
  /** Echoed back so the client can refill the form or build a mailto fallback. */
  values: ContactFields;
};

export const emptyFields: ContactFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
  errors: {},
  values: emptyFields,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(fields: ContactFields) {
  const errors: ContactState["errors"] = {};

  if (fields.name.length < 2) errors.name = "Please enter your name.";
  else if (fields.name.length > 100) errors.name = "That name is too long.";

  if (!EMAIL_RE.test(fields.email)) errors.email = "Please enter a valid email address.";
  else if (fields.email.length > 200) errors.email = "That email is too long.";

  if (fields.subject.length < 3) errors.subject = "Please add a subject.";
  else if (fields.subject.length > 150) errors.subject = "That subject is too long.";

  if (fields.message.length < 15)
    errors.message = "Please write at least 15 characters.";
  else if (fields.message.length > 4000)
    errors.message = "Please keep the message under 4000 characters.";

  return errors;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
