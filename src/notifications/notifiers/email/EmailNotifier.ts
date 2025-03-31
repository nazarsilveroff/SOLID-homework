import { INotifier } from '../../interfaces/INotifier';
import { INotificationMessage } from '../../interfaces/INotificationMessage';
import { INotificationMessageAdapter } from '../../interfaces/INotificationMessageAdapter';

export default class EmailNotifier implements INotifier {
  constructor(private messageAdapter: INotificationMessageAdapter) {}

  send(message: INotificationMessage): void {
    const formattedMessage = this.messageAdapter.format(message);
    console.log('Sending email notification...');
    console.log(formattedMessage);
    console.log('Email notification sent successfully!');
  }
}
