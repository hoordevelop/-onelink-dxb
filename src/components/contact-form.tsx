"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Enter your name.";
    if (phone.replace(/\D/g, "").length < 7) next.phone = "Enter a phone number.";
    if (message.trim().length < 4) next.message = "Tell the desk what you need.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("");
      return;
    }

    const body = [`Name: ${name.trim()}`, `Phone: ${phone.trim()}`, "", message.trim()].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("OneLink enquiry")}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with this enquiry. If it does not, call " + site.phoneDisplay + ".");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <label className="block">
        <span className="mb-2 block text-sm text-[#5C6570]">Name</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="h-12 w-full rounded-xl bg-[#F3F5F7] px-3 text-sm outline-none ring-[#2F6FED] focus:ring-2"
        />
        {errors.name ? <span className="mt-1 block text-xs text-[#B42318]">{errors.name}</span> : null}
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-[#5C6570]">Phone</span>
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="h-12 w-full rounded-xl bg-[#F3F5F7] px-3 text-sm outline-none ring-[#2F6FED] focus:ring-2"
          placeholder="05x xxx xxxx"
        />
        {errors.phone ? <span className="mt-1 block text-xs text-[#B42318]">{errors.phone}</span> : null}
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-[#5C6570]">Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-28 w-full rounded-xl bg-[#F3F5F7] px-3 py-3 text-sm outline-none ring-[#2F6FED] focus:ring-2"
        />
        {errors.message ? (
          <span className="mt-1 block text-xs text-[#B42318]">{errors.message}</span>
        ) : null}
      </label>
      <button
        type="submit"
        className="rounded-full bg-[#2F6FED] px-5 py-2.5 text-sm font-semibold text-white"
      >
        Send enquiry
      </button>
      {status ? (
        <p className="text-sm leading-6 text-[#1B4E86]" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
