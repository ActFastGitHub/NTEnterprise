
// app/components/HeroSection.tsx
// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const phrases = [
//   "Fully Furnished Rental Services?",
//   "Property Management?",
//   "Building Maintenance?"
// ];

// const AnimatedText = () => {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => setIndex((prev) => (prev + 1) % phrases.length), 3000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="relative min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">
//       <motion.div
//         key={phrases[index]}
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 1.1, opacity: 0 }}
//         transition={{ duration: 0.7, ease: "easeInOut" }}
//         className="text-3xl md:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
//       >
//         {phrases[index]}
//       </motion.div>
//     </div>
//   );
// };

// const HeroSection = () => {
//   const [offsetY, setOffsetY] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => setOffsetY(window.pageYOffset);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section id="home" className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.video
//           className="w-full h-full object-cover"
//           src="/hero/hero-bg.mp4"
//           autoPlay
//           loop
//           muted
//           style={{ transform: `translateY(${offsetY * 0.25}px)` }}
//         />
//       </div>
//       <div className="absolute inset-0 bg-black bg-opacity-60 z-0 pointer-events-none" />
//       <div className="container mx-auto px-4 z-10 max-w-3xl text-center">
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold text-white mb-3"
//           style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//         >
//           Do you need
//         </motion.h1>
//         <AnimatedText />
//         <motion.p
//           className="mt-6 text-base md:text-lg lg:text-xl text-gray-200"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           We are a dedicated team focused on delivering high-quality rental
//           services, property management, and maintenance solutions. By combining
//           operational efficiency, creative problem-solving, and attention to
//           detail, we ensure an exceptional experience for both owners and
//           tenants.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const phrases = [
// 	"Fully Furnished Rental Services?",
// 	"Property Management?",
// 	"Building Maintenance?"
// ];

// const AnimatedText = () => {
// 	const [index, setIndex] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setIndex(prev => (prev + 1) % phrases.length);
// 		}, 3000);
// 		return () => clearInterval(interval);
// 	}, []);

// 	return (
// 		<div className="relative min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">
// 			<motion.div
// 				key={phrases[index]}
// 				initial={{ scale: 0.9, opacity: 0 }}
// 				animate={{ scale: 1, opacity: 1 }}
// 				exit={{ scale: 1.1, opacity: 0 }}
// 				transition={{ duration: 0.7, ease: "easeInOut" }}
// 				className="text-3xl md:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500"
// 			>
// 				{phrases[index]}
// 			</motion.div>
// 		</div>
// 	);
// };

// const HeroSection = () => {
// 	const [offsetY, setOffsetY] = useState(0);
// 	const handleScroll = () => setOffsetY(window.pageYOffset);

// 	useEffect(() => {
// 		window.addEventListener("scroll", handleScroll);
// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	return (
// 		<section id="home" className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
// 			{/* Background Video */}
// 			<div className="absolute inset-0 overflow-hidden">
// 				<motion.video
// 					className="w-full h-full object-cover"
// 					src="/hero/hero-bg.mp4"
// 					autoPlay
// 					loop
// 					muted
// 					style={{ transform: `translateY(${offsetY * 0.25}px)` }}
// 				/>
// 			</div>

// 			{/* Overlay */}
// 			<div className="absolute inset-0 bg-black bg-opacity-60 z-0 pointer-events-none" />

// 			{/* Main Content */}
// 			<div className="container mx-auto px-4 z-10 max-w-3xl text-center">
// 				<motion.h1
// 					className="text-5xl md:text-6xl font-extrabold text-white mb-4"
// 					style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
// 					initial={{ y: -30, opacity: 0 }}
// 					animate={{ y: 0, opacity: 1 }}
// 					transition={{ duration: 0.9 }}
// 				>
// 					Do you need
// 				</motion.h1>

// 				<AnimatedText />

// 				<motion.p
// 					className="mt-6 text-base md:text-lg lg:text-xl text-gray-300"
// 					initial={{ y: 20, opacity: 0 }}
// 					animate={{ y: 0, opacity: 1 }}
// 					transition={{ duration: 1, delay: 0.4 }}
// 				>
// 					We are a dedicated team focused on delivering high-quality rental services,
// 					property management, and maintenance solutions. By combining efficiency and
// 					attention to detail, we ensure an exceptional experience for both owners and tenants.
// 				</motion.p>
// 			</div>
// 		</section>
// 	);
// };

// export default HeroSection;


// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const servicesData = [
//   {
//     title: "Fully Furnished Rentals",
//     description: "Experience comfort with our top-tier rental properties.",
//     image: "/hero/hero-1.jpg",
//     details: ["Luxury interiors", "Prime locations", "Affordable rates"],
//   },
//   {
//     title: "Property Management",
//     description: "We handle everything for your property with expertise.",
//     image: "/hero/hero-1.jpg",
//     details: ["Tenant screening", "Maintenance handling", "Rent collection"],
//   },
//   {
//     title: "Building Maintenance",
//     description: "Keeping your property in top shape.",
//     image: "/hero/hero-1.jpg",
//     details: ["Routine inspections", "Repairs and upgrades", "Emergency response"],
//   },
// ];

// const ServicesSection = () => {
//   const [openServices, setOpenServices] = useState(servicesData.map(() => false));
//   const [typedTexts, setTypedTexts] = useState(servicesData.map(() => ""));

//   const handleServiceClick = (index: number) => {
//     setOpenServices((prev) => {
//       if (prev[index]) return prev;
//       const newState = [...prev];
//       newState[index] = true;
//       return newState;
//     });

//     setTypedTexts((prev) => {
//       if (prev[index] !== "") return prev;
//       const newArray = [...prev];
//       newArray[index] = "";
//       return newArray;
//     });
//   };

//   useEffect(() => {
//     openServices.forEach((isOpen, i) => {
//       if (isOpen && typedTexts[i] === "") {
//         let j = 0;
//         let textBuffer = "";
//         const timer = setInterval(() => {
//           textBuffer += servicesData[i].details[j] + "\n";
//           setTypedTexts((prev) => {
//             const updated = [...prev];
//             updated[i] = textBuffer;
//             return updated;
//           });
//           j++;
//           if (j === servicesData[i].details.length) {
//             clearInterval(timer);
//           }
//         }, 500);
//       }
//     });
//   }, [openServices, typedTexts]);

//   return (
//     <section id="services" className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-20 text-white">
//       <div className="container mx-auto text-center px-6">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold mb-10"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Services
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={index}
//               className="p-8 bg-black bg-opacity-60 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 ease: "easeOut",
//                 delay: index * 0.2,
//               }}
//               onClick={() => handleServiceClick(index)}
//               whileHover={openServices[index] ? { scale: 1.05 } : { scale: 1.1 }}
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 width={360}
//                 height={200}
//                 className="mx-auto object-center rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-semibold">{service.title}</h3>
//               <p className="mt-2 text-gray-300">{service.description}</p>

//               {openServices[index] && (
//                 <motion.div
//                   className="mt-6 p-4 bg-black bg-opacity-80 rounded-lg shadow-lg text-left"
//                   initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                   whileHover={{ scale: 1.03 }}
//                 >
//                   <h4 className="text-xl font-bold mb-2">{service.title} Details:</h4>
//                   <pre className="text-lg text-gray-300 whitespace-pre-wrap">{typedTexts[index]}</pre>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// // "use client";
// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import Typewriter from "typewriter-effect";

// // const aboutImages = [
// // 	{
// // 		src: "/hero/hero-1.jpg",
// // 		description: [
// // 			"Years of expertise in property management.",
// // 			"Providing high-quality service.",
// // 			"Trusted by clients worldwide."
// // 		]
// // 	},
// // 	{
// // 		src: "/hero/hero-1.jpg",
// // 		description: [
// // 			"Dedicated team ensuring seamless experiences.",
// // 			"Customer-focused solutions.",
// // 			"24/7 Support available."
// // 		]
// // 	},
// // 	{
// // 		src: "/hero/hero-1.jpg",
// // 		description: [
// // 			"Comprehensive rental and maintenance solutions.",
// // 			"Hassle-free property management.",
// // 			"Affordable and transparent pricing."
// // 		]
// // 	}
// // ];

// // const AboutUs = () => {
// // 	const [openCards, setOpenCards] = useState(aboutImages.map(() => false));

// // 	const handleCardClick = (index: number) => {
// // 		setOpenCards(prev => {
// // 			if (prev[index]) return prev;
// // 			const newState = [...prev];
// // 			newState[index] = true;
// // 			return newState;
// // 		});
// // 	};

// // 	return (
// // 		<section id='about' className='bg-gray-900 py-20 text-white relative'>
// // 			<div className='container mx-auto px-6'>
// // 				<motion.h2
// // 					className='text-center text-4xl md:text-5xl font-bold mb-6'
// // 					initial={{ opacity: 0, y: 20 }}
// // 					whileInView={{ opacity: 1, y: 0 }}
// // 					transition={{ duration: 0.8 }}>
// // 					About Us
// // 				</motion.h2>

// // 				<div className='mt-10 flex flex-wrap justify-center gap-6'>
// // 					{aboutImages.map((item, index) => (
// // 						<div key={index} className='flex flex-col items-center w-[220px] md:w-[300px]'>
// // 							<motion.div
// // 								className='relative cursor-pointer w-full h-[200px] md:h-[300px] rounded-lg overflow-hidden shadow-lg'
// // 								whileHover={{ scale: 1.1 }}
// // 								onClick={() => handleCardClick(index)}
// // 								initial={{ opacity: 0, y: 20 }}
// // 								whileInView={{ opacity: 1, y: 0 }}
// // 								transition={{ duration: 0.8, delay: index * 0.2 }}>
// // 								<Image
// // 									src={item.src}
// // 									alt={`About ${index + 1}`}
// // 									layout='fill'
// // 									objectFit='cover'
// // 									className='rounded-lg'
// // 								/>
// // 							</motion.div>

// // 							{openCards[index] && (
// // 								<motion.div
// // 									className='mt-4 w-full p-4 bg-black bg-opacity-60 rounded-lg shadow-lg text-left'
// // 									initial={{ opacity: 0, y: 20, scale: 0.95 }}
// // 									animate={{ opacity: 1, y: 0, scale: 1 }}
// // 									transition={{ duration: 0.5 }}
// // 									whileHover={{ scale: 1.02 }}>
// // 									<Typewriter
// // 										key={index}
// // 										onInit={typewriter => {
// // 											item.description.forEach((line, i) => {
// // 												// Only add a <br/> if it's NOT the last line:
// // 												if (i < item.description.length - 1) {
// // 													typewriter.typeString(line + "<br/>").pauseFor(300);
// // 												} else {
// // 													// Last line typed with no trailing <br/>
// // 													typewriter.typeString(line).pauseFor(300);
// // 												}
// // 											});
// // 											typewriter.start();
// // 										}}
// // 										options={{
// // 											delay: 40,
// // 											cursor: "" // Remove cursor content
// // 										}}
// // 									/>
// // 								</motion.div>
// // 							)}
// // 						</div>
// // 					))}
// // 				</div>
// // 			</div>
// // 		</section>
// // 	);
// // };

// // export default AboutUs;

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Typewriter from "typewriter-effect";

// const aboutImages = [
//   {
//     src: "/hero/hero-1.jpg",
//     description: [
//       "Years of expertise in property management.",
//       "Providing high-quality service.",
//       "Trusted by clients worldwide.",
//     ],
//   },
//   {
//     src: "/hero/hero-1.jpg",
//     description: [
//       "Dedicated team ensuring seamless experiences.",
//       "Customer-focused solutions.",
//       "24/7 Support available.",
//     ],
//   },
//   {
//     src: "/hero/hero-1.jpg",
//     description: [
//       "Comprehensive rental and maintenance solutions.",
//       "Hassle-free property management.",
//       "Affordable and transparent pricing.",
//     ],
//   },
// ];

// const AboutUs = () => {
//   const [openCards, setOpenCards] = useState(aboutImages.map(() => false));

//   const handleCardClick = (index: number) => {
//     setOpenCards((prev) => {
//       if (prev[index]) return prev;
//       const newState = [...prev];
//       newState[index] = true;
//       return newState;
//     });
//   };

//   return (
//     <section id="about" className="bg-gray-900 py-20 text-white relative">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-center text-4xl md:text-5xl font-bold mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           About Us
//         </motion.h2>

//         <div className="mt-10 flex flex-wrap justify-center gap-6">
//           {aboutImages.map((item, index) => (
//             <div key={index} className="flex flex-col items-center w-[220px] md:w-[300px]">
//               <motion.div
//                 className="relative cursor-pointer w-full h-[200px] md:h-[300px] rounded-lg overflow-hidden shadow-lg"
//                 whileHover={{ scale: 1.1 }}
//                 onClick={() => handleCardClick(index)}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//               >
//                 <Image
//                   src={item.src}
//                   alt={`About ${index + 1}`}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </motion.div>

//               {openCards[index] && (
//                 <motion.div
//                   className="mt-4 w-full p-4 bg-black bg-opacity-60 rounded-lg shadow-lg text-left"
//                   initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <Typewriter
//                     key={index}
//                     onInit={(typewriter) => {
//                       item.description.forEach((line, i) => {
//                         typewriter.typeString(line + "<br/>").pauseFor(300);
//                       });
//                       typewriter.start();
//                     }}
//                     options={{
//                       delay: 40,
//                       cursor: "",
//                     }}
//                   />
//                 </motion.div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;


// "use client";
// import { motion } from "framer-motion";

// const ContactUs = () => {
//   return (
//     <section id="contact" className="bg-gray-900 py-20 text-white">
//       <div className="container mx-auto text-center px-6">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Contact Us
//         </motion.h2>
//         <motion.form
//           className="max-w-lg mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-3 my-2 rounded-md bg-gray-800 text-white border border-gray-600"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full p-3 my-2 rounded-md bg-gray-800 text-white border border-gray-600"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="w-full p-3 my-2 rounded-md bg-gray-800 text-white border border-gray-600"
//           />
//           <button
//             type="submit"
//             className="mt-4 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-md font-bold"
//           >
//             Send Message
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

// "use client";
// import React, { useState, useEffect } from "react";

// const Navbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   // Smooth scrolling function
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setIsMobileMenuOpen(false); // Close menu on mobile after clicking a link
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-70 shadow">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <button
//               onClick={() => scrollToSection("home")}
//               className="text-white text-xl font-bold"
//             >
//               NT Enterprise
//             </button>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-white">
//               Home
//             </button>
//             <button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-white">
//               Services
//             </button>
// 			<button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white">
//               About Us
//             </button>
//             <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white">
//               Contact Us
//             </button>
//           </div>
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-300 hover:text-white focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <button onClick={() => scrollToSection("home")} className="block text-gray-300 hover:text-white">
//               Home
//             </button>
//             <button onClick={() => scrollToSection("services")} className="block text-gray-300 hover:text-white">
//               Services
//             </button>
// 			<button onClick={() => scrollToSection("about")} className="block text-gray-300 hover:text-white">
//               About Us
//             </button>
//             <button onClick={() => scrollToSection("contact")} className="block text-gray-300 hover:text-white">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// "use client";
// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Footer: React.FC = () => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   // Smooth scrolling function
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-gray-900 py-8 text-white">
//       <div className="container mx-auto px-4 text-center">
//         {/* Navigation Links */}
//         <motion.div
//           className="mb-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-8 md:space-y-0"
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
//           transition={{ duration: 0.5 }}
//         >
//           <button onClick={() => scrollToSection("home")} className="hover:underline">
//             Home
//           </button>        
//           <button onClick={() => scrollToSection("services")} className="hover:underline">
//             Services
//           </button>
// 		  <button onClick={() => scrollToSection("about")} className="hover:underline">
//             About Us
//           </button>
//           <button onClick={() => scrollToSection("contact")} className="hover:underline">
//             Contact Us
//           </button>
//         </motion.div>

//         {/* Logo / Brand */}
//         <motion.div
//           className="mb-4"
//           initial="hidden"
//           animate={controls}
//           variants={{ visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0.8 } }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <h2 className="text-2xl font-bold">NT Enterprise</h2>
//         </motion.div>

//         {/* Copyright */}
//         <motion.div
//           className="text-sm text-gray-400"
//           initial="hidden"
//           animate={controls}
//           variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <p>&copy; {new Date().getFullYear()} NT Enterprise. All rights reserved.</p>
//           <p className="mt-1 text-xs">Built &amp; maintained by Your Name Here</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// "use client";
// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Footer: React.FC = () => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-gray-950 py-8 text-white border-t border-gray-800">
//       <div className="container mx-auto px-4 text-center">
//         <motion.div
//           className="mb-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-8 md:space-y-0 text-sm"
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
//           transition={{ duration: 0.5 }}
//         >
//           <button onClick={() => scrollToSection("home")} className="hover:underline">
//             Home
//           </button>
//           <button onClick={() => scrollToSection("services")} className="hover:underline">
//             Services
//           </button>
//           <button onClick={() => scrollToSection("about")} className="hover:underline">
//             About Us
//           </button>
//           <button onClick={() => scrollToSection("contact")} className="hover:underline">
//             Contact Us
//           </button>
//         </motion.div>

//         <motion.div
//           className="mb-3"
//           initial="hidden"
//           animate={controls}
//           variants={{ visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0.8 } }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <h2 className="text-xl font-bold">NT Enterprise</h2>
//         </motion.div>

//         <motion.div
//           className="text-xs text-gray-400"
//           initial="hidden"
//           animate={controls}
//           variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <p>&copy; {new Date().getFullYear()} NT Enterprise. All rights reserved.</p>
//           <p className="mt-1">Built & maintained by Your Name Here</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



