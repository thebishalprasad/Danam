import nodemailer from 'nodemailer';
import { emailTemplate } from './emailTemplate';

export async function POST(req) {
    try {
        const { name, email, phone, itemName, quantity, pickupAddress, countryCode } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',   
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.TO_MAIL_ID,
            subject: 'New Donation Request',
            html: emailTemplate({ name, email, countryCode, phone, itemName, quantity, pickupAddress }),
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), { status: 500 });
    }
}
