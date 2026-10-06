"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function TrackForm() {
  const [ol, setOl] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = ol.trim();
    if (value.length < 3) {
      setError("Enter the OL number from your booking.");
      return;
    }
    setError("");
    const text = `Please share the status for OL ${value}.`;
    window.location.href = `${site.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-xl" noValidate>
      <label className="block">
        <span className="mb-2 block text-sm text-[#5C6570]">OL number</span>
        <input
          value={ol}
          onChange={(event) => setOl(event.target.value)}
          className="h-12 w-full rounded-xl bg-[#F3F5F7] px-3 text-sm outline-none ring-[#2F6FED] focus:ring-2"
          placeholder="OL number"
        />
      </label>
      {error ? <p className="mt-2 text-xs text-[#B42318]">{error}</p> : null}
      <button
        type="submit"
        className="mt-4 rounded-full bg-[#2F6FED] px-5 py-2.5 text-sm font-semibold text-white"
      >
        Track on WhatsApp
      </button>
      <p className="mt-4 text-sm leading-6 text-[#5C6570]">
        Live status is confirmed by the desk. This opens WhatsApp with your OL number. You can also
        call {site.phoneDisplay}.
      </p>
    </form>
  );
}
