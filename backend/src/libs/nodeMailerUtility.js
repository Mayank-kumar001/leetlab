import nodemailer from "nodemailer"

export const sendMail = async (userEmail, code) => {
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "935a5467577153",
            pass: "2fb8e5ae5f8851",
        },
    });

    

    const info = await transporter.sendMail({
            from: 'mayankiit01aasmaa@gmail.com',
            to: userEmail,
            subject: "verification code",
            text: "Hello world?", // plain‑text body
            html: `<b>${code}</b>`, // HTML body
        });

        console.log('mail sent', info);
    }


