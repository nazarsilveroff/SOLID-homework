import { INotifier } from '../interfaces/INotifier';
import EmailNotifier from './email/EmailNotifier';
import TelegramNotifier from './telegram/TelegramNotifier';
import SmsNotifier from './sms/SmsNotifier';
import { NotFoundError } from '../../common/errors/Errors';
import EmailMessageAdapter from './email/EmailMessageAdapter';
import SmsMessageAdapter from './sms/SmsMessageAdapter';
import TelegramMessageAdapter from './telegram/TelegramMessageAdapter';

export const EMAIL = 'email';
export const TELEGRAM = 'telegram';
export const SMS = 'sms';

const NotifierRegistry = Object.freeze({
  [EMAIL]: new EmailNotifier(new EmailMessageAdapter()),
  [TELEGRAM]: new TelegramNotifier(new TelegramMessageAdapter()),
  [SMS]: new SmsNotifier(new SmsMessageAdapter()),
});

export type NotificationTypes = keyof typeof NotifierRegistry;
export type NotifierRegistryTypes = (typeof NotifierRegistry)[keyof typeof NotifierRegistry];

export class NotifierFactory {
  static create(type: NotificationTypes): INotifier {
    const notifier = NotifierRegistry[type];
    if (!notifier) {
      throw new NotFoundError(`Notification ${type} is not supported`);
    }
    return notifier;
  }
}
