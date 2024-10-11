import { EmailTemplate } from "./email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
  email: string;
  otp: string;
}

export async function POST(req: Request) {
  try {
    const { email, otp }: RequestBody = await req.json();

    const { data, error } = await resend.emails.send({
      from: "LSEBIG <user-authentication@lsebig.com>",
      to: [email],
      subject: "Your OTP Code",
      react: EmailTemplate({ otp }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(
      { message: "OTP sent successfully", data },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
