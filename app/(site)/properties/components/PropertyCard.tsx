// app/(site)/properties/components/PropertyCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Property } from "../propertiesData";

type Props = {
  property: Property;
  coverSrc?: string | null; // provided by server page
};

export default function PropertyCard({ property, coverSrc }: Props) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="relative aspect-[16/10] bg-gray-100">
        {coverSrc ? (
          <Image
            src={coverSrc}
            alt={`${property.name} cover`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="text-lg font-bold tracking-tight">{property.unitType}</div>
        <div className="text-sm text-gray-600">{property.shortDescription}</div>
        <div className="text-xs text-gray-500">{property.address}</div>

        <div className="mt-3">
          <Link
            href={`/properties/${property.slug}`}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-black text-white text-sm font-semibold hover:opacity-90"
          >
            View details
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
