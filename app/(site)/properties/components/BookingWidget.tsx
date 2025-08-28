// app/(site)/properties/components/BookingWidget.tsx
"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { DEFAULT_NIGHTLY_PRICE, TAX_GST, TAX_PST } from "../propertiesData";

function diffNights(start?: string, end?: string) {
  if (!start || !end) return 0;
  const s = new Date(start);
  const e = new Date(end);
  const ms = e.getTime() - s.getTime();
  const nights = Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
  return nights;
}

type Props = {
  propertyName: string;   // e.g., "Townhouse Style — 96"
  propertyAddress: string;
  nightlyPrice?: number;
};

export default function BookingWidget({
  propertyName,
  propertyAddress,
  nightlyPrice,
}: Props) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const price = nightlyPrice ?? DEFAULT_NIGHTLY_PRICE;

  const nights = useMemo(() => diffNights(startDate, endDate), [startDate, endDate]);
  const subtotal = nights * price;
  const gst = subtotal * TAX_GST;
  const pst = subtotal * TAX_PST;
  const total = subtotal + gst + pst;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please enter your name and email.");
      return;
    }

    setSending(true);

    const bookingBlock =
      nights > 0
        ? [
            "---- Booking Details ----",
            `Property: ${propertyName}`,
            `Address: ${propertyAddress}`,
            startDate ? `Check-in: ${startDate}` : "",
            endDate ? `Check-out: ${endDate}` : "",
            `Nights: ${nights}`,
            `Nightly: $${price.toFixed(2)}`,
            `Subtotal: $${subtotal.toFixed(2)}`,
            `GST (5%): $${gst.toFixed(2)}`,
            `PST (8%): $${pst.toFixed(2)}`,
            `Total: $${total.toFixed(2)}`,
          ]
            .filter(Boolean)
            .join("\n")
        : "";

    const finalMessage =
      [message?.trim(), bookingBlock].filter(Boolean).join("\n\n") || "(No message provided)";

    try {
      // Reuse your existing Contact API: expects { name, email, message, category }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: finalMessage,
          category: "Booking Inquiry",
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");
      toast.success("Thanks! We’ve received your inquiry.");
      setName("");
      setEmail("");
      setMessage("");
      setStartDate("");
      setEndDate("");
    } catch (err) {
      console.error(err);
      toast.error("Sorry—something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-2xl font-extrabold">${price}</div>
          <div className="text-xs text-gray-500">per night + taxes</div>
        </div>
      </div>

      {/* Date pickers */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-semibold">Check-in</label>
          <input
            type="date"
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={todayStr}
          />
        </div>
        <div>
          <label className="text-sm font-semibold">Check-out</label>
          <input
            type="date"
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={startDate || todayStr}
          />
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4 rounded-xl bg-gray-50 p-3 text-sm">
        <div className="flex justify-between">
          <span>
            {nights} night{nights === 1 ? "" : "s"} × ${price}
          </span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>GST (5%)</span>
          <span>${gst.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>PST (8%)</span>
          <span>${pst.toFixed(2)}</span>
        </div>
        <div className="mt-2 border-t pt-2 flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Contact form (reuses /api/contact) */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold">Message (optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
            rows={4}
            placeholder="Any questions or notes?"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-xl bg-black text-white font-semibold py-2.5 hover:opacity-90 disabled:opacity-60"
        >
          {sending ? "Sending..." : "Contact to Book"}
        </button>
      </form>
    </div>
  );
}
