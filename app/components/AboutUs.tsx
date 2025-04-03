// components/AboutUs.tsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section id="about" className="bg-white py-20 text-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative h-72 md:h-full rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/about/management.jpg" // ⬅️ Real people in a meeting, team planning
              alt="Our team"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              NT Enterprise is your all-in-one property partner, delivering exceptional rental services and stress-free
              property management. We prioritize client trust, tenant comfort, and long-term value.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>✅ Experienced team with local market knowledge</li>
              <li>✅ Transparent pricing and reliable communication</li>
              <li>✅ Proactive maintenance and 24/7 support</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
