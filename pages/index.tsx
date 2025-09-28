import Head from "next/head";
import Image from "next/image";
import Pill from "@/components/common/Pill";
import { HERO_BACKGROUND_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  const filters = [
    "All",
    "Top Villa",
    "Free Reschedule",
    "Book Now, Pay later",
    "Self Checkin",
    "Instant Book",
  ];

  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Find your favorite place to stay with ALX Listings." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src={HERO_BACKGROUND_IMAGE}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 p-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-lg sm:text-xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((label, idx) => (
            <Pill key={label} label={label} active={idx === 0} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <article key={property.name} className="rounded-xl overflow-hidden border bg-white shadow-sm group">
            <div className="relative w-full h-48">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-semibold text-lg truncate" title={property.name}>{property.name}</h3>
                <span className="text-sm font-medium">⭐ {property.rating.toFixed(2)}</span>
              </div>
              <p className="text-blue-700 font-bold text-lg">${property.price.toLocaleString()}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
