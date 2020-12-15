const assert = require('assert');
const dotenv = require('dotenv');

// read in the .env file
dotenv.config();

// capture the environment variables the application needs
const { AZURE_SERVICEBUS_CONNECTION_STRING, AZURE_SERVICEBUS_QUEUE } = process.env;

// validate the required configuration information

assert(AZURE_SERVICEBUS_CONNECTION_STRING, 'Service bus configuration is required.');
assert(AZURE_SERVICEBUS_QUEUE, 'ServiceBus Queue name configuration is required.');

export { AZURE_SERVICEBUS_CONNECTION_STRING, AZURE_SERVICEBUS_QUEUE };
