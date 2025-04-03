// components/CallToAction.tsx

"use client";
import { motion } from "framer-motion";

const CTASection = () => {
	return (
		<section className='bg-emerald-600 py-16 text-white'>
			<div className='container mx-auto px-6 text-center max-w-3xl'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold mb-4'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}>
					Ready to Elevate Your Property Experience?
				</motion.h2>
				<motion.p
					className='text-lg mb-8 text-emerald-100'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}>
					Contact us today to find out how we can help manage or rent your property — stress-free.
				</motion.p>
				<motion.a
					href='#contact'
					className='inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-lg shadow hover:bg-slate-100 transition'
					initial={{ scale: 0.95 }}
					whileHover={{ scale: 1 }}
					transition={{ duration: 0.3 }}>
					Get in Touch
				</motion.a>
			</div>
		</section>
	);
};

export default CTASection;
