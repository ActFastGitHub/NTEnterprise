// app/(site)/properties/_utils/pricing.ts
// Rule: ≤26 nights => GST + PST + MRDT; ≥27 nights => GST only.

export const TAX = {
  GST: 0.05, // 5%
  PST: 0.08, // 8%
  MRDT: 0.03 // 3% (adjust if your municipality differs)
};

export type BookingTotals = {
  nights: number;
  nightly: number;
  base: number;
  gst: number;
  pst: number;
  mrdt: number;
  total: number;
  provincialTaxesApplied: boolean; // true when ≤26 nights
};

export function computeBookingTotals(nightly: number, nights: number): BookingTotals {
  const n = Math.max(0, nights);
  const base = nightly * n;
  const provincialTaxesApplied = n <= 26;

  const gst = base * TAX.GST;
  const pst = provincialTaxesApplied ? base * TAX.PST : 0;
  const mrdt = provincialTaxesApplied ? base * TAX.MRDT : 0;

  return {
    nights: n,
    nightly,
    base,
    gst,
    pst,
    mrdt,
    total: base + gst + pst + mrdt,
    provincialTaxesApplied
  };
}

export const formatCAD = (v: number) =>
  v.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 2 });
