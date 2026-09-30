import { deliveryTypes, site, type DeliveryType } from "@/lib/site";

export type DeliveryRequest = {
  fullName: string;
  phone: string;
  email: string;
  deliveryType: string;
  pickup: string;
  dropoff: string;
  message: string;
};

export type DeliveryField = keyof DeliveryRequest;

export type DeliverySubmitResult = {
  channel: "mailto";
  href: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateDeliveryRequest(
  data: DeliveryRequest,
): Partial<Record<DeliveryField, string>> {
  const errors: Partial<Record<DeliveryField, string>> = {};

  if (data.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name.";
  }

  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    errors.phone = "Enter a phone number we can reach.";
  }

  if (!emailPattern.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!deliveryTypes.includes(data.deliveryType as DeliveryType)) {
    errors.deliveryType = "Choose a delivery type.";
  }

  if (data.pickup.trim().length < 3) {
    errors.pickup = "Enter a pickup location.";
  }

  if (data.dropoff.trim().length < 3) {
    errors.dropoff = "Enter a drop-off location.";
  }

  if (data.message.length > 1000) {
    errors.message = "Keep the message under 1000 characters.";
  }

  return errors;
}

/**
 * Interim transport: builds a mailto link for the visitor's email app.
 * Swap this function for a fetch() to an email API when one is configured.
 * The interface should not claim the message was delivered until that call succeeds.
 */
export function submitDeliveryRequest(data: DeliveryRequest): DeliverySubmitResult {
  const subject = `Delivery request — ${data.deliveryType}`;
  const body = [
    "New delivery request from the OneLink website",
    "",
    `Full name: ${data.fullName.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Email: ${data.email.trim()}`,
    `Delivery type: ${data.deliveryType}`,
    `Pickup: ${data.pickup.trim()}`,
    `Drop-off: ${data.dropoff.trim()}`,
    "",
    "Message:",
    data.message.trim() || "(none)",
  ].join("\n");

  const href = `mailto:${site.email}?cc=${encodeURIComponent(site.emailSecondary)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return { channel: "mailto", href };
}
