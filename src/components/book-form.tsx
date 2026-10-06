"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { bookingServices, emirates, site } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  pickup: string;
  dropoff: string;
  emirate: string;
  service: string;
  vehicle: "Bike" | "Car";
  weight: string;
  notes: string;
};

const initial: Fields = {
  name: "",
  phone: "",
  pickup: "",
  dropoff: "",
  emirate: "Dubai",
  service: bookingServices[0],
  vehicle: "Bike",
  weight: "1",
  notes: "",
};

export function BookForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState("");

  const fare = useMemo(() => {
    const weight = Number(fields.weight);
    const safe = Number.isFinite(weight) && weight > 0 ? weight : 0;
    const extra = Math.max(0, safe - 5) * 3;
    return 32 + extra;
  }, [fields.weight]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) nextErrors.name = "Enter your name.";
    const digits = fields.phone.replace(/\D/g, "");
    if (digits.length < 7) nextErrors.phone = "Enter a phone number we can reach.";
    if (fields.pickup.trim().length < 3) nextErrors.pickup = "Enter a pickup location.";
    if (fields.dropoff.trim().length < 3) nextErrors.dropoff = "Enter a drop-off location.";
    const weight = Number(fields.weight);
    if (!Number.isFinite(weight) || weight <= 0) nextErrors.weight = "Enter the weight in kg.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    const body = [
      "Pickup request from the OneLink website",
      "",
      `Name: ${fields.name.trim()}`,
      `Phone: ${fields.phone.trim()}`,
      `Pickup: ${fields.pickup.trim()}`,
      `Drop-off: ${fields.dropoff.trim()}`,
      `Pickup emirate: ${fields.emirate}`,
      `Service: ${fields.service}`,
      `Vehicle: ${fields.vehicle}`,
      `Weight (kg): ${fields.weight}`,
      `Indicative fare: AED ${fare}`,
      "",
      "Notes:",
      fields.notes.trim() || "(none)",
      "",
      "The desk confirms the final fare before dispatch.",
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent("Pickup request")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("Your email app should open with this request. The desk confirms the fare before anyone is sent. If the app does not open, call " + site.phoneDisplay + ".");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            className={inputClass}
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            className={inputClass}
            value={fields.phone}
            placeholder="05x xxx xxxx"
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
          />
        </Field>
        <Field label="Pickup" error={errors.pickup}>
          <input
            className={inputClass}
            value={fields.pickup}
            placeholder="Building, area"
            onChange={(event) => update("pickup", event.target.value)}
          />
        </Field>
        <Field label="Drop-off" error={errors.dropoff}>
          <input
            className={inputClass}
            value={fields.dropoff}
            placeholder="Building, area"
            onChange={(event) => update("dropoff", event.target.value)}
          />
        </Field>
        <Field label="Pickup emirate" error={errors.emirate}>
          <select
            className={inputClass}
            value={fields.emirate}
            onChange={(event) => update("emirate", event.target.value)}
          >
            {emirates.map((emirate) => (
              <option key={emirate}>{emirate}</option>
            ))}
          </select>
        </Field>
        <Field label="Service" error={errors.service}>
          <select
            className={inputClass}
            value={fields.service}
            onChange={(event) => update("service", event.target.value)}
          >
            {bookingServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </Field>
        <Field label="Vehicle">
          <div className="flex h-12 items-center gap-2">
            {(["Bike", "Car"] as const).map((vehicle) => (
              <button
                key={vehicle}
                type="button"
                className={`rounded-full px-5 py-2 text-sm font-semibold ${
                  fields.vehicle === vehicle
                    ? "bg-[#3A3F47] text-white"
                    : "text-[#3A4150]"
                }`}
                aria-pressed={fields.vehicle === vehicle}
                onClick={() => update("vehicle", vehicle)}
              >
                {vehicle}
              </button>
            ))}
          </div>
        </Field>
        <Field label="Weight (kg)" error={errors.weight}>
          <input
            className={inputClass}
            value={fields.weight}
            inputMode="decimal"
            onChange={(event) => update("weight", event.target.value)}
          />
        </Field>
      </div>
      <Field label="Notes" error={errors.notes}>
        <textarea
          className={`${inputClass} min-h-24 py-3`}
          value={fields.notes}
          placeholder="Fragile, cash to collect, who should receive it"
          onChange={(event) => update("notes", event.target.value)}
        />
      </Field>

      <div className="pt-2">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8B909A]">INDICATIVE FARE</p>
        <p className="mt-2 font-display text-4xl font-semibold text-[#1A1D23]">AED {fare}</p>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#5C6570]">
          Bike or car, plus AED 3 for each kilo above 5 kg. The desk confirms the final amount on{" "}
          {site.phoneDisplay} before pickup.
        </p>
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-[#E15B6A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#CF4456]"
      >
        Request this pickup
      </button>
      {status ? (
        <p className="text-sm leading-6 text-[#1B4E86]" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}

const inputClass =
  "h-12 w-full rounded-xl border-0 bg-[#F3F5F7] px-3 text-sm text-[#1A1D23] outline-none ring-[#2F6FED] placeholder:text-[#9AA1AB] focus:ring-2";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#5C6570]">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-[#B42318]">{error}</span> : null}
    </label>
  );
}
