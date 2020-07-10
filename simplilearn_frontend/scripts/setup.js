const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logger = console;

const environment = process.env.NODE_ENV || 'development';
if (environment === 'development') {
  const envPathLocal = path.resolve(`${__dirname}/../.env.local`);
  if (!fs.existsSync(envPathLocal)) {
    logger.log('Creating .env.local...');

    const envPathSample = path.resolve(`${__dirname}/../.env.example`);
    fs.copyFileSync(envPathSample, envPathLocal);

    execSync(
      // eslint-disable-next-line quotes
      `osascript -e 'display notification ".env.local has been created. Values need to be set. See README.md for information." with title ".env.local created"'`,
    );

    try {
      execSync(`code ${envPathLocal}`);
    } catch (exception) {
      logger.log(`Setup environment variables: ${envPathLocal}`);
    }
  }
}
