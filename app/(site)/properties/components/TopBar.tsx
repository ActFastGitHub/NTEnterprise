// app/(site)/properties/components/TopBar.tsx
import Link from "next/link";

type Props =
  | { variant: "listing" }                 // on /properties
  | { variant: "detail"; backHref?: string }; // on /properties/[slug]

export default function TopBar(props: Props) {
  const isDetail = props.variant === "detail";
  const backHref = isDetail ? props.backHref ?? "/properties" : "/";

  return (
    <div className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-extrabold tracking-tight text-lg md:text-xl">
          NT <span className="text-emerald-600">Enterprise</span>
        </Link>

        {/* Right action */}
        {isDetail ? (
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50"
          >
            {/* Left arrow icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to listings
          </Link>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50"
          >
            {/* Home icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M3 12l9-8 9 8v8a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Home
          </Link>
        )}
      </div>
    </div>
  );
}
