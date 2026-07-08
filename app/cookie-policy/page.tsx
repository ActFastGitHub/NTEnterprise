import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Cookie Policy | NT Enterprise",
	description: "How NT Enterprise uses cookies and browser storage on this website."
};

const updatedDate = "July 8, 2026";

export default function CookiePolicyPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900'>
			<section className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
				<Link href='/' className='text-sm font-semibold text-emerald-700 hover:text-emerald-800'>
					Back to home
				</Link>

				<header className='mt-8 border-b border-gray-200 pb-8'>
					<p className='text-sm font-semibold uppercase tracking-wide text-emerald-700'>NT Enterprise</p>
					<h1 className='mt-3 text-4xl font-bold tracking-tight sm:text-5xl'>Cookie Policy</h1>
					<p className='mt-4 text-sm text-gray-600'>Last updated: {updatedDate}</p>
				</header>

				<div className='mt-10 space-y-8 text-base leading-7 text-gray-700'>
					<section>
						<h2 className='text-2xl font-bold text-gray-900'>What Cookies Are</h2>
						<p className='mt-3'>
							Cookies and similar browser storage technologies are small pieces of information stored on your
							device. They can help websites function, remember preferences, improve security, or measure how
							a website is used.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>How This Website Uses Cookies</h2>
						<p className='mt-3'>
							The current NT Enterprise website does not appear to use advertising or analytics cookies. It
							uses essential browser storage to remember your cookie preference so the notice does not appear
							on every visit. Essential storage is used only to operate the site and preserve your choice.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Optional Cookies</h2>
						<p className='mt-3'>
							If NT Enterprise later adds optional analytics, advertising, or marketing cookies, we will
							update this policy and request consent before those optional technologies are used.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>Managing Your Choice</h2>
						<p className='mt-3'>
							You can clear this website's stored preference through your browser settings at any time. After
							clearing site data, the cookie notice will appear again so you can make a new choice.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-bold text-gray-900'>More Information</h2>
						<p className='mt-3'>
							For details about personal information handling, please review our{" "}
							<Link href='/privacy-policy' className='font-semibold text-emerald-700 hover:text-emerald-800'>
								Privacy Policy
							</Link>
							. You can also contact us at{" "}
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
