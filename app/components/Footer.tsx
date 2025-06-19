// components/Footer.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-gray-900 text-white py-10'>
			<div className='container mx-auto px-6 text-center'>
				<motion.div
					className='mb-6 flex flex-wrap justify-center gap-6'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					>
					<a href='#home' className='hover:underline text-gray-300'>
						Home
					</a>
					<a href='#services' className='hover:underline text-gray-300'>
						Services
					</a>
					<a href='#about' className='hover:underline text-gray-300'>
						About
					</a>
					<a href='#contact' className='hover:underline text-gray-300'>
						Contact
					</a>
				</motion.div>

				<motion.h2
					className='text-xl font-bold mb-2'
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					>
					NT Enterprise
				</motion.h2>

				<p className='text-sm text-gray-400'>&copy; {currentYear} NT Enterprise. All rights reserved.</p>
				<p className='text-xs text-gray-400 mt-1'>Built & Maintained by <strong>Angelo Guerra</strong></p>
			</div>
		</footer>
	);
};

export default Footer;
