import { INotificationMessageAdapter } from '../../interfaces/INotificationMessageAdapter';
import { INotificationMessage } from '../../interfaces/INotificationMessage';

export default class SmsMessageAdapter implements INotificationMessageAdapter {
  format(massage: INotificationMessage): string {
    return `${massage.title} - ${massage.subject} - ${massage.body}`;
  }
}
