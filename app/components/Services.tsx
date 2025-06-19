// components/Services.tsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Furnished Rentals",
    description: "Modern, fully-equipped properties that feel like home.",
    image: "/services/rental.jpg" // ⬅️ Use cozy, staged living room
  },
  {
    title: "Property Management",
    description: "We handle your property as if it's our own—transparent, professional, complete.",
    image: "/services/propertymanagement.jpg" // ⬅️ Use photo of handshake or manager with clipboard
  },
  {
    title: "Building Maintenance",
    description: "Our team ensures properties stay safe, functional, and valuable.",
    image: "/services/cleaning.jpg" // ⬅️ Use technician inspecting HVAC or tools in use
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
