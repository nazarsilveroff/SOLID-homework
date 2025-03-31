import { INotificationMessageAdapter } from '../../interfaces/INotificationMessageAdapter';
import { INotificationMessage } from '../../interfaces/INotificationMessage';

export default class TelegramMessageAdapter implements INotificationMessageAdapter {
  format(message: INotificationMessage): string {
    return `*${message.title}*\n\n_${message.subject}_\n\n${message.body}`;
  }
}
