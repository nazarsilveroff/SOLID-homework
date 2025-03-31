import { INotificationMessage } from './INotificationMessage';

export interface INotificationMessageAdapter {
  format(massage: INotificationMessage): string;
}
