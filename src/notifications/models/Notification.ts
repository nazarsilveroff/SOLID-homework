import { INotificationMessage } from '../interfaces/INotificationMessage';
import { ValidationError } from '../../common/errors/Errors';

export default class Notification {
  protected _message: INotificationMessage;
  constructor(private message: INotificationMessage) {
    this.validate();
    this._message = message;
  }
  protected validate(): void {
    this.validateMessage();
  }
  private validateMessage(): void {
    const { title, subject, body } = this.message;
    if (!title) throw new ValidationError('Title is required');
    if (!subject) throw new ValidationError('Subject is required');
    if (!body) throw new ValidationError('Body is required');
  }

  get messageDto(): INotificationMessage {
    return this._message;
  }
}
