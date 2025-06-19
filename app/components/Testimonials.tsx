// components/Testimonials.tsx"

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
	{
		name: "Sarah M.",
		text: "NT Enterprise made renting my property completely hands-off. They’re responsive, organized, and truly care about quality.",
		location: "Burnaby, BC"
	},
	{
		name: "Jason P.",
		text: "Excellent maintenance service! My tenants are happy and I never worry about last-minute issues anymore.",
		location: "Surrey, BC"
	},
	{
		name: "Angela R.",
		text: "Their team helped me find a fully furnished rental that felt like home. Everything was seamless.",
		location: "Richmond, BC"
	},
	{
		name: "Mark D.",
		text: "Transparent communication, proactive service, and real professionalism. Highly recommend NT Enterprise.",
		location: "Coquitlam, BC"
	},
	{
		name: "Rachel T.",
		text: "I’ve never felt more confident letting someone manage my property. Absolutely a 5-star experience!",
		location: "New Westminster, BC"
	}
];

const TestimonialsSection = () => {
	return (
		<section id='testimonials' className='bg-white py-20'>
			<div className='container mx-auto px-6 max-w-6xl'>
				<motion.h2
					className='text-4xl md:text-5xl font-bold text-center mb-12'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					>						
					What Our Clients Say
				</motion.h2>

				<div className='relative'>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						breakpoints={{
							640: { slidesPerView: 1 },
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 }
						}}
						loop={true}
						pagination={{
							dynamicBullets: true,
							clickable: true // ✅ Keep clickable for better UX
						}}
						modules={[Pagination]}
						className='!pb-10'>
						{" "}
						{/* ✅ Add bottom padding so bullets don't overlap */}
						{testimonials.map((t, i) => (
							<SwiperSlide key={i}>
								<motion.div
									className='bg-slate-100 rounded-xl shadow-md p-6 h-full'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: i * 0.1 }}
									viewport={{ once: true }}
									>
									<p className='text-gray-700 text-md mb-4 italic'>“{t.text}”</p>
									<p className='text-md font-semibold text-emerald-600'>{t.name}</p>
									<p className='text-sm text-gray-500'>{t.location}</p>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
