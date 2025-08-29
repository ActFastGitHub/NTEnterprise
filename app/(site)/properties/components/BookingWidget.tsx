"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

/* ---------- Pricing helpers (kept local & simple) ---------- */
type TaxMode = "GST_ONLY" | "BC_RULE";

const TAX = { GST: 0.05, PST: 0.08, MRDT: 0.03 };

function computeBookingTotals(nightly: number, nights: number, taxMode: TaxMode) {
  const n = Math.max(0, nights);
  const base = nightly * n;

  if (taxMode === "GST_ONLY") {
    const gst = base * TAX.GST;
    return { nights: n, nightly, base, gst, pst: 0, mrdt: 0, total: base + gst, provincial: false };
  }
  // BC_RULE: ≤26 nights => GST+PST+MRDT; ≥27 nights => GST only
  const provincial = n <= 26;
  const gst = base * TAX.GST;
  const pst = provincial ? base * TAX.PST : 0;
  const mrdt = provincial ? base * TAX.MRDT : 0;
  return { nights: n, nightly, base, gst, pst, mrdt, total: base + gst + pst + mrdt, provincial };
}

function taxesDescription(nights: number, taxMode: TaxMode) {
  if (taxMode === "GST_ONLY") return "Taxes: GST (5%) only";
  return nights <= 26
    ? "Taxes: GST (5%) + PST (8%) + MRDT (3%)"
    : "Taxes: GST (5%) only (stay ≥ 27 nights)";
}

const formatCAD = (v: number) =>
  v.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 2 });

/* ------------------ Component ------------------ */
function diffNights(start?: string, end?: string) {
  if (!start || !end) return 0;
  const s = new Date(start);
  const e = new Date(end);
  const ms = e.getTime() - s.getTime();
  return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
}

type Props = {
  propertyName: string;     // e.g., "Townhouse Style — 96"
  propertyAddress: string;
  nightlyPrice: number;     // property-specific nightly price
};

export default function BookingWidget({ propertyName, propertyAddress, nightlyPrice }: Props) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  // Toggle for showing tax estimate (OFF by default)
  const [includeTaxes, setIncludeTaxes] = useState(false);

  // Simple, build-time default from env, plus optional URL override (?tax=gst or ?tax=bc)
  const buildMode = (process.env.NEXT_PUBLIC_TAX_MODE as TaxMode) === "BC_RULE" ? "BC_RULE" : "GST_ONLY";
  const [taxMode, setTaxMode] = useState<TaxMode>(buildMode);

  useEffect(() => {
    // Optional quick override for testing without redeploy: /properties/96?tax=bc or ?tax=gst
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search).get("tax");
    if (p === "bc") setTaxMode("BC_RULE");
    if (p === "gst") setTaxMode("GST_ONLY");
  }, []);

  const nights = useMemo(() => diffNights(startDate, endDate), [startDate, endDate]);
  const totals = useMemo(() => computeBookingTotals(nightlyPrice, nights, taxMode), [nightlyPrice, nights, taxMode]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please enter your name and email.");
      return;
    }
    setSending(true);

    const lines: string[] = [
      "---- Booking Details ----",
      `Property: ${propertyName}`,
      `Address: ${propertyAddress}`,
    ];
    if (startDate) lines.push(`Check-in: ${startDate}`);
    if (endDate) lines.push(`Check-out: ${endDate}`);
    lines.push(`Nights: ${nights}`);
    lines.push(`Nightly: ${formatCAD(nightlyPrice)}`);
    lines.push(`Subtotal: ${formatCAD(totals.base)}`);

    if (includeTaxes && nights > 0) {
      lines.push(taxesDescription(nights, taxMode));
      lines.push(`GST: ${formatCAD(totals.gst)}`);
      if (totals.provincial) {
        lines.push(`PST: ${formatCAD(totals.pst)}`);
        lines.push(`MRDT: ${formatCAD(totals.mrdt)}`);
      }
      lines.push(`Total (incl. taxes): ${formatCAD(totals.total)}`);
    } else {
      lines.push("Taxes: not included in this estimate");
      lines.push(`Total (subtotal only): ${formatCAD(totals.base)}`);
    }

    const finalMessage = [message?.trim(), lines.join("\n")].filter(Boolean).join("\n\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: finalMessage, category: "Booking Inquiry" }),
      });

      if (!res.ok) throw new Error("Failed to send message");
      toast.success("Thanks! We’ve received your inquiry.");
      setName(""); setEmail(""); setMessage(""); setStartDate(""); setEndDate("");
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
          <div className="text-2xl font-extrabold">{formatCAD(nightlyPrice)}</div>
          <div className="text-xs text-gray-500">per night</div>
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

      {/* Toggle: include taxes */}
      <div className="mt-3 flex items-center gap-2">
        <input
          id="includeTaxes"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300"
          checked={includeTaxes}
          onChange={(e) => setIncludeTaxes(e.target.checked)}
        />
        <label htmlFor="includeTaxes" className="text-sm text-gray-700">
          Include taxes (estimate)
        </label>
      </div>

      {/* Summary */}
      <div className="mt-4 rounded-xl bg-gray-50 p-3 text-sm">
        <div className="flex justify-between">
          <span>
            {nights} night{nights === 1 ? "" : "s"} × {formatCAD(nightlyPrice)}
          </span>
          <span>{formatCAD(totals.base)}</span>
        </div>

        {includeTaxes && nights > 0 ? (
          <>
            <div className="flex justify-between text-gray-600">
              <span>GST (5%)</span>
              <span>{formatCAD(totals.gst)}</span>
            </div>
            {totals.provincial && (
              <>
                <div className="flex justify-between text-gray-600">
                  <span>PST (8%)</span>
                  <span>{formatCAD(totals.pst)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>MRDT (3%)</span>
                  <span>{formatCAD(totals.mrdt)}</span>
                </div>
              </>
            )}
            <div className="mt-2 border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>{formatCAD(totals.total)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">{taxesDescription(nights, taxMode)}</p>
          </>
        ) : (
          <>
            <div className="mt-2 border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>{formatCAD(totals.base)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Taxes not included in this estimate. Check “Include taxes” to see a full breakdown.
            </p>
          </>
        )}
      </div>

      {/* Contact form */}
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
