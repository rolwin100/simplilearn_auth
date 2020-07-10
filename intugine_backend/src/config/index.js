const dotenv = require('dotenv');
dotenv.config().parsed;

module.exports = {
  port: process.env.PORT || 8000,
  dbUrl: process.env.DB_URL,
  appKey: process.env.APP_KEY,
  appUrl: process.env.APP_URL,

  cors: {
    origin: ['*'],
  },

  admin: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    path: '/admin',
  },

  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1',
    bucket: 'bucket_name',
  },

  smtp: {
    host: process.env.SMTP_HOST || 'email-smtp.us-east-1.amazonaws.com',
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
    from: process.env.SMTP_FROM,
  },

  twilio: {
    accountSid: process.env.TWILIO_SID,
    authToken: process.env.TWILIO_TOKEN,
    fromNumber: process.env.TWILIO_FROM || '+18888272096',
    countryCode: '+91',
  },

  collageApiKey: process.env.COLLAGE_API_KEY,
};
