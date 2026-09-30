"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  submitDeliveryRequest,
  validateDeliveryRequest,
  type DeliveryField,
  type DeliveryRequest,
} from "@/lib/delivery-request";
import { deliveryTypes, site } from "@/lib/site";

const emptyForm: DeliveryRequest = {
  fullName: "",
  phone: "",
  email: "",
  deliveryType: "",
  pickup: "",
  dropoff: "",
  message: "",
};

const fields: { name: DeliveryField; label: string; autoComplete?: string; type?: string }[] = [
  { name: "fullName", label: "Full Name", autoComplete: "name" },
  { name: "phone", label: "Phone Number", autoComplete: "tel", type: "tel" },
  { name: "email", label: "Email", autoComplete: "email", type: "email" },
];

export function ContactForm() {
  const [form, setForm] = useState<DeliveryRequest>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<DeliveryField, string>>>({});
  const [draftReady, setDraftReady] = useState(false);

  const setField = (name: DeliveryField, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateDeliveryRequest(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setDraftReady(false);
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first === "deliveryType" ? "delivery-type" : fieldId(first as DeliveryField))?.focus();
      return;
    }

    const result = submitDeliveryRequest(form);
    setDraftReady(true);
    window.location.href = result.href;
  };

  return (
    <form id="quote" onSubmit={onSubmit} noValidate className="scroll-mt-28 rounded-xl border border-[#008CFF]/35 bg-[#061A2D]/80 p-5 shadow-[0_30px_80px_-40px_rgba(0,123,255,0.9)] backdrop-blur-md sm:p-7">
      <h3 className="font-display text-2xl font-semibold text-white">Request a Delivery</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#C5D7E6]">
        Tell us the route. We open this in your email app addressed to {site.email}. It is only sent when you send that email.
      </p>

      <div className="mt-6 grid gap-4">
        {fields.map((field) => (
          <Field
            key={field.name}
            id={fieldId(field.name)}
            label={field.label}
            error={errors[field.name]}
          >
            <Input
              id={fieldId(field.name)}
              name={field.name}
              type={field.type ?? "text"}
              autoComplete={field.autoComplete}
              value={form[field.name]}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${fieldId(field.name)}-error` : undefined}
              onChange={(event) => setField(field.name, event.target.value)}
              className="bg-[#020B14]/70"
            />
          </Field>
        ))}

        <Field id="delivery-type" label="Delivery Type" error={errors.deliveryType}>
          <Select
            value={form.deliveryType || null}
            onValueChange={(value) => setField("deliveryType", value ?? "")}
          >
            <SelectTrigger
              id="delivery-type"
              aria-invalid={Boolean(errors.deliveryType)}
              aria-describedby={errors.deliveryType ? "delivery-type-error" : undefined}
              className="bg-[#020B14]/70"
            >
              <SelectValue placeholder="Select a delivery type" />
            </SelectTrigger>
            <SelectContent>
              {deliveryTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field id="pickup" label="Pickup Location" error={errors.pickup}>
          <Input
            id="pickup"
            name="pickup"
            autoComplete="off"
            value={form.pickup}
            aria-invalid={Boolean(errors.pickup)}
            aria-describedby={errors.pickup ? "pickup-error" : undefined}
            onChange={(event) => setField("pickup", event.target.value)}
            className="bg-[#020B14]/70"
          />
        </Field>

        <Field id="dropoff" label="Drop-off Location" error={errors.dropoff}>
          <Input
            id="dropoff"
            name="dropoff"
            autoComplete="off"
            value={form.dropoff}
            aria-invalid={Boolean(errors.dropoff)}
            aria-describedby={errors.dropoff ? "dropoff-error" : undefined}
            onChange={(event) => setField("dropoff", event.target.value)}
            className="bg-[#020B14]/70"
          />
        </Field>

        <Field id="message" label="Message" error={errors.message}>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            onChange={(event) => setField("message", event.target.value)}
            className="bg-[#020B14]/70"
          />
        </Field>
      </div>

      <Button type="submit" variant="glow" size="xl" className="mt-6 w-full">
        {draftReady ? "Open email draft again" : "Request a Delivery"}
      </Button>

      {draftReady ? (
        <p role="status" className="mt-4 text-sm leading-relaxed text-[#D6EBFF]">
          Your email app should open with this request. Nothing reaches OneLink until you send that email. For an immediate booking, call {site.phoneDisplay} or WhatsApp us.
        </p>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-[#9BB3C7]">
          This form does not send email by itself yet. It prepares a message you can send from your own email app.
        </p>
      )}
    </form>
  );
}

function fieldId(name: DeliveryField) {
  if (name === "fullName") return "full-name";
  return name;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-[#FFB4B4]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
