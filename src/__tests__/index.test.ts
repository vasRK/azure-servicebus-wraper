import { MessageService } from '../index';
import { AZURE_SERVICEBUS_CONNECTION_STRING, AZURE_SERVICEBUS_QUEUE } from '../app-config';

test('My Greeter', () => {
  const service = new MessageService(<string>AZURE_SERVICEBUS_CONNECTION_STRING, <string>AZURE_SERVICEBUS_QUEUE);
  expect(service).not.toBe(null);
});
