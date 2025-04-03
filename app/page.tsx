// "use client";
// import { ParallaxProvider } from "react-scroll-parallax";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";
// import HeroSection from "@/app/components/HeroSection";
// import ServicesSection from "@/app/components/Services";
// import AboutUs from "@/app/components/AboutUs";
// import ContactUs from "@/app/components/ContactUs";

// export default function Home() {
// 	return (
// 		<ParallaxProvider>
// 			<Navbar />
// 			<HeroSection />
// 			<ServicesSection />
// 			<AboutUs />
// 			<ContactUs />
// 			<Footer />
// 		</ParallaxProvider>
// 	);
// }

// app/page.tsx
"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/Services";
import AboutUsSection from "@/app/components/AboutUs";
import ContactSection from "@/app/components/ContactUs";
import TestimonialsSection from "@/app/components/Testimonials";
import HowItWorksSection from "@/app/components/HowItWorks";
import FeatureHighlightsSection from "@/app/components/FeatureHighlights";
import FAQSection from "@/app/components/FAQs";

export default function Home() {
	return (
		<ParallaxProvider>
			<Navbar />
			<HeroSection />
			<ServicesSection />
			<AboutUsSection />
			<TestimonialsSection />
			<HowItWorksSection />
			<FeatureHighlightsSection />
			<FAQSection />
			<ContactSection />
			<Footer />
		</ParallaxProvider>
	);
}
