const Email = require('email-templates');
const nodemailer = require('nodemailer');
const path = require('path');

module.exports = ({ appUrl, smtp }) => {
  const transport = nodemailer.createTransport({
    host: smtp.host,
    port: 587,
    auth: {
      user: smtp.username,
      pass: smtp.password,
    },
  });
  const email = new Email({
    message: {
      from: smtp.from,
    },
    send: true,
    preview: false,
    transport,
  });

  return (to, data, template = 'portrait') => {
    const templatesDir = path.join(__dirname, '../views/emails');
    return email.send({
      template: `${templatesDir}/${template}`,
      message: {
        to,
      },
      locals: { appUrl, ...data },
    });
  };
};
