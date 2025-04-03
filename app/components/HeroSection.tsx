// components/HeroSection.tsx

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
	"Your Property, Our Priority",
	"Seamless Rentals, Reliable Management",
	"Turning Homes Into Hassle-Free Investments"
];

const AnimatedHeadline = () => {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % phrases.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<motion.h2
			key={phrases[index]}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.7 }}
			className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mt-4"
		>
			{phrases[index]}
		</motion.h2>
	);
};

const HeroSection = () => {
	return (
		<section
			id="home"
			className="relative h-screen flex items-center justify-center bg-cover bg-center"
			style={{
				backgroundImage: "url('/hero/hero-bg.jpg')" // 🔁 Replace this with your custom background
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

			{/* Content */}
			<div className="z-10 text-center max-w-3xl px-4">
				<motion.h1
					className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					NT Enterprise
				</motion.h1>

				<AnimatedHeadline />

				<motion.p
					className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					We provide tailored solutions for property owners and tenants. From fully furnished
					rentals to comprehensive management services, we help turn your investments into effortless income.
				</motion.p>

				<motion.div
					className="mt-8 flex justify-center gap-4 flex-wrap"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.8 }}
				>
					<a
						href="#services"
						className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition"
					>
						Explore Services
					</a>
					<a
						href="#contact"
						className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition"
					>
						Contact Us
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
