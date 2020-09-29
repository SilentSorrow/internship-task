const mailgun = require("mailgun-js");
const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;

const sendEmail = (mail, token) => {
    const sender = mailgun({apiKey: api_key, domain: domain});

    const link = `localhost:3000/verifyEmail/${token}`;

    const message = {
        from: `Inva iamsilsor@gmail.com`,
        to: `${mail}`,
        subject: `Verify your account`,
        html: `<h1>Click the link to verify your account!</h1><br><i>${link}</i>`,
    };

    sender.messages().send(message, (err, body) => {
        console.log(err);
        console.log(body);
    });
};

module.exports = sendEmail;

