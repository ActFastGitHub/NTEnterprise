"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "ntenterprise-cookie-consent";

type ConsentChoice = "necessary" | "all";

export default function CookieConsent() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const savedConsent = window.localStorage.getItem(CONSENT_KEY);
		setIsVisible(!savedConsent);
	}, []);

	const saveConsent = (choice: ConsentChoice) => {
		window.localStorage.setItem(
			CONSENT_KEY,
			JSON.stringify({
				choice,
				acceptedAt: new Date().toISOString()
			})
		);
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className='fixed inset-x-0 bottom-0 z-[100] border-t border-gray-200 bg-white shadow-2xl'>
			<div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-gray-900 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
				<div className='max-w-3xl'>
					<p className='text-base font-semibold'>Cookie notice</p>
					<p className='mt-1 text-sm leading-6 text-gray-600'>
						NT Enterprise uses essential website storage to remember this preference and support basic site
						functionality. We do not currently use advertising or analytics cookies. If optional tracking is
						added later, we will ask for your consent before using it.
					</p>
					<div className='mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm'>
						<Link href='/privacy-policy' className='font-medium text-emerald-700 hover:text-emerald-800'>
							Privacy Policy
						</Link>
						<Link href='/cookie-policy' className='font-medium text-emerald-700 hover:text-emerald-800'>
							Cookie Policy
						</Link>
					</div>
				</div>

				<div className='flex flex-col gap-2 sm:flex-row sm:items-center'>
					<button
						type='button'
						onClick={() => saveConsent("necessary")}
						className='rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-50'>
						Necessary only
					</button>
					<button
						type='button'
						onClick={() => saveConsent("all")}
						className='rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700'>
						Accept
					</button>
				</div>
			</div>
		</div>
	);
}
