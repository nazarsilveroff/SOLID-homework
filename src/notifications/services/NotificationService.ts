import { INotifier } from '../interfaces/INotifier';
import { INotificationMessage } from '../interfaces/INotificationMessage';

export class NotificationService {
  constructor(private notifier: INotifier) {}

  sendNotification(message: INotificationMessage) {
    this.notifier.send(message);
  }
}
