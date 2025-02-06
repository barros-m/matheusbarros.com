import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    
    const data = await resend.emails.send({
      from: "contact@resend.dev",
      to: "matheusbarros1305@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ success: false, error: "error" });
  }
}
