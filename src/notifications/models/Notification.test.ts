import Notification from './Notification';

describe('Notification', () => {
  it('should create a notification with valid parameters', () => {
    const notification = new Notification({
      title: 'Test Notification',
      subject: 'Test Subject',
      body: 'This is a test notification.',
    });
    expect(notification.messageDto).toEqual({
      title: 'Test Notification',
      subject: 'Test Subject',
      body: 'This is a test notification.',
    });
  });

  it('should throw an error when created with invalid parameters', () => {
    expect(() => {
      new Notification({
        title: '',
        subject: 'Test Subject',
        body: 'This is a test notification.',
      });
    }).toThrow('Title is required');
  });
});
