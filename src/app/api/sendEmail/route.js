import nodemailer from 'nodemailer';
import { emailTemplate } from './emailTemplate';

export async function POST(req) {
    try {
        // Destructure the form data
        const { name, email, phone, itemName, quantity, pickupAddress, countryCode } = await req.json();

        // Create the transporter object using Gmail service
        const transporter = nodemailer.createTransport({
            service: 'Gmail',   
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Construct the mail options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.TO_MAIL_ID,
            subject: 'New Donation Request',
            html: emailTemplate({ name, email, countryCode, phone, itemName, quantity, pickupAddress }),
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return success response
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        // Handle any errors and return failure response
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), { status: 500 });
    }
}
