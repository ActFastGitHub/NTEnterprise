// app/api/submit-testimonial/route.tsx

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	const data = await req.json();

	if (!data.name || !data.message) {
		return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
	}

	try {
		const testimonial = await prisma.testimonial.create({
			data: {
				name: data.name,
				message: data.message,
				location: data.location,
				approved: false
			}
		});

		return NextResponse.json({ success: true, testimonial });
	} catch (err) {
		return NextResponse.json({ error: "Server error." }, { status: 500 });
	}
}
