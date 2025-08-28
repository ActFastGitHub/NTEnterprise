// app/(site)/properties/propertiesData.ts
export type Property = {
  slug: string;            // folder name under /public/properties/[slug]
  name: string;            // display label (e.g., "96")
  address: string;
  unitType: string;
  amenities: string[];
  shortDescription: string;
  imageCount: number;      // number of images: /public/properties/[slug]/1.jpg..imageCount.jpg
  nightlyPrice?: number;   // defaults to DEFAULT_NIGHTLY_PRICE
  mapEmbedUrl?: string;    // optional Google Maps <iframe> src
};

// Default pricing & BC tax (GST 5% + PST 8% = 13%)
export const DEFAULT_NIGHTLY_PRICE = 270;
export const TAX_GST = 0.05;
export const TAX_PST = 0.08;

// Data seed (add more as needed)
export const PROPERTIES: Property[] = [
  {
    slug: "Fraser-Highway",
    name: "Fraser-Highway",
    address: "Unit 104 - 15848 Fraser Hwy, Surrey, BC V4N 6X6",
    unitType: "Apartment Condo Style",
    amenities: [
      "3 Bedroom",
      "2 Full Bath",
      "Living Room",
      "Kitchen",
      "Free Wi-Fi",
      "Furnished",
      "Dedicated Parking Slot",
      "Street Parking for Visitors",
    ],
    shortDescription:
      "Modern 3BR condo with parking and fast Wi-Fi—great for families or work stays.",
    imageCount: 6,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.1644568379297!2d-122.78778632401985!3d49.15934987948055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d11721c26b2d%3A0x2cb173e6a8d4727e!2s15848%20Fraser%20Hwy%2C%20Surrey%2C%20BC%20V4N%206X6!5e1!3m2!1sen!2sca!4v1756412102763!5m2!1sen!2sca",
  },
  {
    slug: "162-A",
    name: "162-A",
    address: "Unit 13 - 9678 162 A St, Surrey, BC V4N 2E4",
    unitType: "Townhouse Style",
    amenities: [
      "4 Bedroom",
      "3 Full Bath",
      "1 Powder Room",
      "Living Room",
      "Kitchen",
      "Dining Room",
      "Free Wi-Fi",
      "Furnished",
      "2-Car Garage",
      "Visitor Parking Slot",
    ],
    shortDescription:
      "Spacious 4BR townhouse with garage and dining room—ideal for longer stays.",
    imageCount: 8,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.03307854376254!2d-122.77190886352882!3d49.178221837619844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d7306bb11505%3A0x5e651d245a441d03!2s9678%20162%20A%20St%2C%20Surrey%2C%20BC%20V4N%202E4!5e1!3m2!1sen!2sca!4v1756412475484!5m2!1sen!2sca",
  }
];



