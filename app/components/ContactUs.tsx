// components/ContactUs.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactSection = () => {
	const [tab, setTab] = useState<"contact" | "testimonial">("contact");
	const [submitted, setSubmitted] = useState(false);

	const handleTestimonialSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);

		const name = formData.get("name")?.toString().trim();
		const message = formData.get("message")?.toString().trim();
		const location = formData.get("location")?.toString().trim() || "";

		if (!name || !message) {
			toast.error("Please fill out all required fields.");
			return;
		}

		try {
			const res = await fetch("/api/submit-testimonial", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ name, message, location })
			});

			if (res.ok) {
				toast.success("Testimonial submitted! Awaiting admin approval.");
				form.reset();
				setSubmitted(true);
			} else {
				toast.error("Something went wrong. Please try again later.");
			}
		} catch (err) {
			toast.error("Unable to connect to the server.");
		}
	};

	return (
		<section id='contact' className='bg-slate-100 py-20 text-gray-800'>
			<div className='container mx-auto px-6 max-w-2xl text-center'>
				<motion.h2
					className='text-4xl md:text-5xl font-bold mb-6'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					{tab === "contact" ? "Let’s Talk" : "Leave a Testimonial"}
				</motion.h2>

				<div className='flex justify-center gap-4 mb-6'>
					<button
						onClick={() => {
							setTab("contact");
							setSubmitted(false);
						}}
						className={`px-4 py-2 rounded-t-md font-semibold ${
							tab === "contact" ? "bg-emerald-600 text-white" : "bg-gray-300"
						}`}>
						Contact Us
					</button>
					<button
						onClick={() => {
							setTab("testimonial");
							setSubmitted(false);
						}}
						className={`px-4 py-2 rounded-t-md font-semibold ${
							tab === "testimonial" ? "bg-emerald-600 text-white" : "bg-gray-300"
						}`}>
						Leave a Testimonial
					</button>
				</div>

				{/* Contact Us Form */}
				{tab === "contact" && (
					<motion.form
						className='bg-white shadow-md rounded-xl p-8 space-y-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}>
						<input
							type='text'
							name='contact-name'
							placeholder='Full Name'
							required
							className='w-full p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='email'
							name='contact-email'
							placeholder='Email Address'
							required
							className='w-full p-3 rounded-lg border border-gray-300'
						/>
						<textarea
							name='contact-message'
							placeholder='Your Message'
							rows={5}
							required
							className='w-full p-3 rounded-lg border border-gray-300'></textarea>
						<button
							type='submit'
							className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg'>
							Send Message
						</button>
					</motion.form>
				)}

				{/* Testimonial Form */}
				{tab === "testimonial" && !submitted && (
					<motion.form
						onSubmit={handleTestimonialSubmit}
						className='bg-white shadow-md rounded-xl p-8 space-y-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}>
						<input
							name='name'
							type='text'
							placeholder='Your Name'
							required
							className='w-full p-3 rounded-lg border border-gray-300'
						/>
						<input
							name='location'
							type='text'
							placeholder='Your City (optional)'
							className='w-full p-3 rounded-lg border border-gray-300'
						/>
						<textarea
							name='message'
							rows={5}
							placeholder='What was your experience like?'
							required
							className='w-full p-3 rounded-lg border border-gray-300'></textarea>
						<button
							type='submit'
							className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg'>
							Submit Testimonial
						</button>
					</motion.form>
				)}

				{/* Testimonial Success Message */}
				{tab === "testimonial" && submitted && (
					<div className='bg-white shadow-md rounded-xl p-8 mt-4'>
						<p className='text-lg font-semibold text-emerald-600'>Thank you for your feedback!</p>
						<p className='text-gray-600 text-sm mt-2'>
							Your testimonial has been submitted and will be reviewed before appearing on the site.
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default ContactSection;
