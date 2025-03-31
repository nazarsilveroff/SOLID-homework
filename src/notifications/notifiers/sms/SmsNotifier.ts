import { INotifier } from '../../interfaces/INotifier';
import { INotificationMessage } from '../../interfaces/INotificationMessage';
import { INotificationMessageAdapter } from '../../interfaces/INotificationMessageAdapter';

export default class SmsNotifier implements INotifier {
  constructor(private messageAdapter: INotificationMessageAdapter) {}

  send(message: INotificationMessage) {
    const formattedMessage = this.messageAdapter.format(message);
    console.log('Sending SMS notification...');
    console.log(formattedMessage);
    console.log('SMS notification sent successfully!');
  }
}
