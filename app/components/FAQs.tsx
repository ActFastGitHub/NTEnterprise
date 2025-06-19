// components/FAQs.tsx

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What types of properties do you accept?",
    answer: "We manage apartments, condos, townhomes, and detached houses."
  },
  {
    question: "How do I start the property management process?",
    answer: "Submit a request via our contact form. We’ll reach out within 24 hours."
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes. Emergency maintenance and tenant issues are handled promptly."
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer: "Nope! We offer flexible agreements based on your needs."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 text-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              {openIndex === i && <p className="text-sm text-gray-600">{faq.answer}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
