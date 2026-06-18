import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const to = process.env.MAIL_TO_ADDRESS; // HARUS ADA
    if (!to) throw new Error("Recipient email not defined");

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}"`,
      replyTo: email,
      to, // <<< HARUS DIISI
      subject: subject || "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true, message: "Email sent" }), { status: 200 });
  } catch (err: any) {
    console.error("Email error:", err);
    return new Response(
      JSON.stringify({ success: false, message: err.message || "Unknown error" }),
      { status: 500 }
    );
  }
}
