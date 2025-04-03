// components/HowItWorks.tsx

"use client";
import { motion } from "framer-motion";
import { FaRegClipboard, FaHandshake, FaKey, FaMoneyBillWave } from "react-icons/fa";

const steps = [
	{
		icon: <FaRegClipboard size={28} />,
		title: "Step 1",
		description: "Submit your property or rental inquiry through our simple form."
	},
	{
		icon: <FaHandshake size={28} />,
		title: "Step 2",
		description: "Our team reviews and connects with you to finalize details."
	},
	{
		icon: <FaKey size={28} />,
		title: "Step 3",
		description: "We take over the rental process or prepare the unit for you."
	},
	{
		icon: <FaMoneyBillWave size={28} />,
		title: "Step 4",
		description: "Sit back while we manage and generate income for you."
	}
];

const HowItWorksSection = () => (
	<section className='bg-white py-20 text-gray-800'>
		<div className='container mx-auto px-6 text-center'>
			<motion.h2
				className='text-4xl md:text-5xl font-bold mb-12'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				How It Works
			</motion.h2>

			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{steps.map((step, i) => (
					<motion.div
						key={i}
						className='p-6 bg-slate-50 shadow rounded-lg text-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: i * 0.1 }}>
						<div className='text-emerald-600 mb-3'>{step.icon}</div>
						<h3 className='text-lg font-semibold mb-2'>{step.title}</h3>
						<p className='text-sm text-gray-600'>{step.description}</p>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default HowItWorksSection;
