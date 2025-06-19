// components/FeatureHighlights.tsx

"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaTools, FaChartLine, FaUserFriends } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={28} />,
    title: "Transparent Management",
    description: "We report everything to you—no hidden fees or vague updates."
  },
  {
    icon: <FaTools size={28} />,
    title: "Reliable Maintenance",
    description: "Our trusted team handles issues quickly and efficiently."
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Income Optimization",
    description: "We maximize your rental potential through proven strategies."
  },
  {
    icon: <FaUserFriends size={28} />,
    title: "Tenant Screening",
    description: "We match your property with qualified, trustworthy renters."
  }
];

const FeatureHighlightsSection = () => (
  <section className="bg-slate-50 py-20 text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Why Property Owners Trust Us
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-600 mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureHighlightsSection;
