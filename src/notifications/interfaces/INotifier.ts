import { INotificationMessage } from './INotificationMessage';

export interface INotifier {
  send(message: INotificationMessage): void;
}
