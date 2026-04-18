// app/(site)/properties/_utils/taxConfig.ts
// Flip this when the policy changes.
// "GST_ONLY"   => always charge GST only
// "BC_RULE"    => ≤26 nights: GST+PST+MRDT; ≥27 nights: GST only
export type TaxMode = "GST_ONLY" | "BC_RULE";

// ✅ Current business policy:
export const TAX_MODE: TaxMode = "GST_ONLY";

// When you want the original behavior back, change to:
// export const TAX_MODE: TaxMode = "BC_RULE";
