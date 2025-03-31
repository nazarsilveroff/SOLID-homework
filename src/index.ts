import { NotifierFactory, EMAIL, SMS, TELEGRAM } from './notifications/notifiers/NotifierFactory';
import { NotificationService } from './notifications/services/NotificationService';
import Notification from './notifications/models/Notification';

let notifier = NotifierFactory.create(EMAIL);
let service = new NotificationService(notifier);
let notification = new Notification({
  title: 'Email Notification',
  subject: 'Test Subject',
  body: 'This is a test email notification.',
});
service.sendNotification(notification.messageDto);

notifier = NotifierFactory.create(TELEGRAM);
service = new NotificationService(notifier);
notification = new Notification({
  title: 'Telegram Notification',
  subject: 'Test Subject',
  body: 'This is a test telegram notification.',
});
service.sendNotification(notification.messageDto);

notifier = NotifierFactory.create(SMS);
service = new NotificationService(notifier);
notification = new Notification({
  title: 'SMS Notification',
  subject: 'Test Subject',
  body: 'This is a test SMS notification.',
});
service.sendNotification(notification.messageDto);
