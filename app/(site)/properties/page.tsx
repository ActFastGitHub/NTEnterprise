// app/(site)/properties/page.tsx
import PropertyCard from "./components/PropertyCard";
import { PROPERTIES } from "./propertiesData";
import { getPropertyImages } from "./utils/getPropertyImages";
import TopBar from "./components/TopBar";

export const dynamic = "force-static";

export default async function PropertiesPage() {
  const withCovers = await Promise.all(
    PROPERTIES.map(async (p) => {
      const imgs = await getPropertyImages(p.slug);
      return { property: p, coverSrc: imgs[0] ?? null };
    })
  );

  return (
    <>
      <TopBar variant="listing" />

      <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <header className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Available Properties
          </h1>
          <p className="mt-1 text-gray-600">
            Browse our available stays. Click a listing to see photos, details, and booking options.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {withCovers.map(({ property, coverSrc }) => (
            <PropertyCard key={property.slug} property={property} coverSrc={coverSrc} />
          ))}
        </section>
      </main>
    </>
  );
}
