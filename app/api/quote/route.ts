import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, product, message } = await req.json();

    const data = await resend.emails.send({
      from: "Luxora Website <onboarding@resend.dev>",
      to: ["luxora.dw@gmail.com"],
      subject: `New Quote Request - ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2>New Luxora Quote Request</h2>

          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Product Type:</strong> ${product}</p>

          <h3>Project Details</h3>
          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}