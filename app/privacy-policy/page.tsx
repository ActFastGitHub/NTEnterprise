import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Privacy Policy | NT Enterprise",
	description: "How NT Enterprise collects, uses, protects, and manages personal information."
};

const updatedDate = "July 8, 2026";

export default function PrivacyPolicyPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900'>
			<section className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
				<Link href='/' className='text-sm font-semibold text-emerald-700 hover:text-emerald-800'>
					Back to home
				</Link>

				<header className='mt-8 border-b border-gray-200 pb-8'>
					<p className='text-sm font-semibold uppercase tracking-wide text-emerald-700'>NT Enterprise</p>
					<h1 className='mt-3 text-4xl font-bold tracking-tight sm:text-5xl'>Privacy Policy</h1>
					<p className='mt-4 text-sm text-gray-600'>Last updated: {updatedDate}</p>
				</header>

				<div className='mt-10 space-y-8 text-base leading-7 text-gray-700'>
					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Overview</h2>
						<p className='mt-3'>
							NT Enterprise respects your privacy. This policy explains how we collect, use, disclose,
							retain, and protect personal information when you use this website, contact us, request
							property or rental information, or submit a testimonial.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Personal Information We Collect</h2>
						<p className='mt-3'>
							We collect information you choose to provide, such as your name, email address, phone number,
							message details, booking inquiry details, testimonial text, and optional location information.
							We may also receive basic technical information from your browser or hosting provider, such as
							IP address, device information, pages visited, and timestamps, where needed to operate and
							secure the website.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>How We Use Personal Information</h2>
						<p className='mt-3'>
							We use personal information to respond to inquiries, provide rental and property management
							information, process booking-related requests, review testimonial submissions, maintain website
							security, troubleshoot website issues, and keep reasonable business records.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Consent and Choices</h2>
						<p className='mt-3'>
							By submitting a form or contacting us, you consent to our use of your information for the
							purpose described at the time of collection. You may withdraw consent, request access to your
							personal information, or ask us to correct or delete it, subject to legal and business record
							requirements.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Cookies and Similar Technologies</h2>
						<p className='mt-3'>
							Based on the current website implementation, NT Enterprise does not appear to use advertising
							or analytics cookies. The website may use essential browser storage to remember cookie consent
							preferences and support core functionality. For more detail, see our{" "}
							<Link href='/cookie-policy' className='font-semibold text-emerald-700 hover:text-emerald-800'>
								Cookie Policy
							</Link>
							.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Service Providers and Disclosure</h2>
						<p className='mt-3'>
							We may share personal information with service providers that help operate the website, send
							email, host data, manage databases, or provide related business support. We do not sell personal
							information. We may disclose information if required by law, to protect our rights, or to
							complete a business transaction involving NT Enterprise.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Retention and Safeguards</h2>
						<p className='mt-3'>
							We retain personal information only as long as reasonably necessary for the purposes described
							in this policy, unless a longer period is required or permitted by law. We use reasonable
							administrative, technical, and organizational safeguards to protect personal information against
							unauthorized access, use, disclosure, loss, or modification.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Access, Correction, and Questions</h2>
						<p className='mt-3'>
							To request access to your personal information, ask for a correction, withdraw consent, or raise
							a privacy concern, contact us at{" "}
							<a href='mailto:info@ntenterprise.ca' className='font-semibold text-emerald-700 hover:text-emerald-800'>
								info@ntenterprise.ca
							</a>
							.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Changes to This Policy</h2>
						<p className='mt-3'>
							We may update this policy from time to time. The updated version will be posted on this page
							with a revised date.
						</p>
					</section>
				</div>
			</section>
		</main>
	);
}
