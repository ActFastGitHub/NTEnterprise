import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms of Use | NT Enterprise",
	description: "Terms governing use of the NT Enterprise website."
};

const updatedDate = "July 8, 2026";

export default function TermsOfUsePage() {
	return (
		<main className='min-h-screen bg-white text-gray-900'>
			<section className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
				<Link href='/' className='text-sm font-semibold text-emerald-700 hover:text-emerald-800'>
					Back to home
				</Link>

				<header className='mt-8 border-b border-gray-200 pb-8'>
					<p className='text-sm font-semibold uppercase tracking-wide text-emerald-700'>NT Enterprise</p>
					<h1 className='mt-3 text-4xl font-bold tracking-tight sm:text-5xl'>Terms of Use</h1>
					<p className='mt-4 text-sm text-gray-600'>Last updated: {updatedDate}</p>
				</header>

				<div className='mt-10 space-y-8 text-base leading-7 text-gray-700'>
					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Use of This Website</h2>
						<p className='mt-3'>
							This website provides general information about NT Enterprise services, rental inquiries, and
							property management inquiries. By using this website, you agree to use it lawfully and not to
							interfere with its security, availability, or operation.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Information Accuracy</h2>
						<p className='mt-3'>
							We aim to keep website information accurate and current, but availability, pricing, taxes,
							services, and property details may change without notice. Website content is provided for
							general information and does not guarantee availability or create a binding rental agreement.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Inquiries and Communications</h2>
						<p className='mt-3'>
							Submitting a form does not guarantee acceptance of a booking, tenancy, or property management
							request. NT Enterprise may contact you using the information you provide to respond to your
							inquiry.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Intellectual Property</h2>
						<p className='mt-3'>
							Website text, images, logos, design, and other content are owned by NT Enterprise or used with
							permission. You may not copy, reproduce, or reuse website content except for personal,
							non-commercial reference unless NT Enterprise gives written permission.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Privacy</h2>
						<p className='mt-3'>
							Your use of this website is also governed by our{" "}
							<Link href='/privacy-policy' className='font-semibold text-emerald-700 hover:text-emerald-800'>
								Privacy Policy
							</Link>{" "}
							and{" "}
							<Link href='/cookie-policy' className='font-semibold text-emerald-700 hover:text-emerald-800'>
								Cookie Policy
							</Link>
							.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Contact</h2>
						<p className='mt-3'>
							Questions about these terms can be sent to{" "}
							<a href='mailto:info@ntenterprise.ca' className='font-semibold text-emerald-700 hover:text-emerald-800'>
								info@ntenterprise.ca
							</a>
							.
						</p>
					</section>
				</div>
			</section>
		</main>
	);
}
