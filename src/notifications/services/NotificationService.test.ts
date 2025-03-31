import { INotifier } from '../interfaces/INotifier';
import { NotificationService } from './NotificationService';

describe('NotificationService', () => {
  let notifierMock: INotifier;
  let notificationService: NotificationService;

  beforeEach(() => {
    notifierMock = {
      send: jest.fn(),
    };
    notificationService = new NotificationService(notifierMock);
  });

  it('should call notifier send method with the correct message', () => {
    const message = {
      title: 'Test Title',
      subject: 'Test Subject',
      body: 'Test Body',
    };

    notificationService.sendNotification(message);

    expect(notifierMock.send).toHaveBeenCalledWith(message);
  });
});
