"use client";

import { useState, type FormEvent } from "react";
import { enquiryServices, site, whatsappLink } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

const field =
  "mt-2 block w-full rounded-none border-0 border-b border-stone bg-transparent px-0 py-3 text-base text-ink placeholder:text-muted/70 focus:border-charcoal focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setPhoneError("Enter a 10-digit mobile number so we can call you back.");
      return;
    }
    setPhoneError("");

    const text = [
      `Hi ${site.name}, I'd like a free quote.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      message ? `Details: ${message}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = whatsappLink(text);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="bg-plaster p-6 text-ink sm:p-10" noValidate={false}>
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Your name
          <input name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </label>
        <label className="block text-sm font-semibold">
          Phone number
          <input
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            className={field}
            placeholder="10-digit mobile"
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? "phone-error" : undefined}
          />
          {phoneError ? (
            <span id="phone-error" className="mt-2 block text-sm font-normal text-[#a3392b]">
              {phoneError}
            </span>
          ) : null}
        </label>
      </div>

      <label className="mt-7 block text-sm font-semibold">
        What do you need?
        <select name="service" required defaultValue="" className={`${field} cursor-pointer`}>
          <option value="" disabled>
            Choose a service
          </option>
          {enquiryServices.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-7 block text-sm font-semibold">
        Tell us about the space <span className="font-normal text-muted">(optional)</span>
        <textarea
          name="message"
          rows={4}
          className={`${field} resize-y`}
          placeholder="For example: new house in Rajapalayam, kitchen and two wardrobes, ready by March"
        />
      </label>

      <button
        type="submit"
        className="mt-9 flex w-full items-center justify-center gap-3 rounded-full bg-charcoal px-7 py-4 font-semibold text-plaster transition-colors hover:bg-walnut"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send enquiry on WhatsApp
      </button>
      <p className="mt-4 text-center text-sm text-muted" role="status">
        {sent
          ? "WhatsApp has opened with your details filled in. Press send there to reach us."
          : "Opens WhatsApp with your details filled in, ready to send."}
      </p>
    </form>
  );
}
