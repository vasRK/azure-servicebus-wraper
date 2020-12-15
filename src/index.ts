import {
  ReceiveMessagesOptions,
  ServiceBusClient,
  ServiceBusMessage,
  ServiceBusReceiver,
  ServiceBusSender,
  ServiceBusSessionReceiverOptions,
} from '@azure/service-bus';
import { AZURE_SERVICEBUS_CONNECTION_STRING, AZURE_SERVICEBUS_QUEUE } from './app-config';

export class MessageService {
  private sbClient: ServiceBusClient;
  private sender: ServiceBusSender;
  private receiver: ServiceBusReceiver;

  constructor(connectionString: string, queueName: string, receiveOptions?: ServiceBusSessionReceiverOptions) {
    this.sbClient = new ServiceBusClient(connectionString);
    this.sender = this.sbClient.createSender(queueName);

    receiveOptions = !receiveOptions ? { receiveMode: 'peekLock' } : receiveOptions;
    this.receiver = this.sbClient.createReceiver(queueName, receiveOptions);
  }

  async SendMessage(msg: ServiceBusMessage) {
    await this.sender.sendMessages(msg);
  }

  async SendBatchMessage(msgs: ServiceBusMessage[]) {
    await this.sender.sendMessages(msgs);
  }

  async GetMessages(count: number, options?: ReceiveMessagesOptions) {
    return await this.receiver.receiveMessages(count, options);
  }

  async CleanUP() {
    await this.sender.close();
    await this.receiver.close();
    await this.sbClient.close();
  }
}
