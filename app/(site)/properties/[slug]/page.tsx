// app/(site)/properties/[slug]/page.tsx
import ImageGallery from "../components/ImageGallery";
import BookingWidget from "../components/BookingWidget";
import { PROPERTIES, type Property } from "../propertiesData";
import { getPropertyImages } from "../utils/getPropertyImages";
import { notFound } from "next/navigation";
import TopBar from "../components/TopBar";

type Params = { slug: string };

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

function getProperty(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

// Next.js 15: params is a Promise in async components
export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return notFound();

  const images = await getPropertyImages(property.slug);

  const embedSrc =
    property.mapEmbedUrl && property.mapEmbedUrl.includes("google.com/maps/embed")
      ? property.mapEmbedUrl
      : `https://www.google.com/maps?q=${encodeURIComponent(property.address)}&output=embed`;

  return (
    <>
      <TopBar variant="detail" backHref="/properties" />

      <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {property.unitType} — {property.name}
          </h1>
          <div className="mt-1 text-gray-600">{property.address}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Gallery + Details */}
          <div className="lg:col-span-2 space-y-6">
            <ImageGallery images={images} />

            {/* Details */}
            <section className="rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-xl font-extrabold mb-3">About this place</h2>
              <div className="text-sm text-gray-700">
                <p className="mb-3">{property.shortDescription}</p>
                <p className="text-gray-600">
                  Unit Type: <span className="font-semibold">{property.unitType}</span>
                </p>
              </div>

              <h3 className="text-lg font-bold mt-5 mb-2">What it offers</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {property.amenities.map((a, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-none" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Map */}
            <section className="rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-xl font-extrabold mb-3">Location</h2>
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                <iframe
                  src={embedSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </div>

          {/* Right: Booking widget */}
          <aside className="lg:col-span-1">
            <BookingWidget
              propertyName={`${property.unitType} — ${property.name}`}
              propertyAddress={property.address}
              nightlyPrice={property.nightlyPrice}
            />
          </aside>
        </div>
      </main>
    </>
  );
}
