const Twilio = require('twilio');

module.exports = (
  { twilio: { accountSid, authToken, countryCode, fromNumber } },
  logger,
) => {
  const client = new Twilio(accountSid, authToken);

  return (phone, body) => {
    const to = `${countryCode}${phone}`;
    if (logger) logger.info('Sending text: ', to, body);

    return client.messages.create({
      to,
      body,
      from: fromNumber,
    });
  };
};
