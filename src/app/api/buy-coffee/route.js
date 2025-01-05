import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, amount } = await req.json();

  try {
    // Here you would typically integrate with a payment processor like Stripe
    // For this example, we'll just send an email notification

    await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>',
      to: 'kspsagar01@gmail.com', // Replace with your email
      subject: 'New Coffee Purchase!',
      html: `
        <h1>Someone bought you a coffee!</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Amount:</strong> $${amount}</p>
      `,
    });

    return NextResponse.json({ message: 'Coffee purchased successfully!' });
  } catch (error) {
    console.error('Error processing coffee purchase:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}

