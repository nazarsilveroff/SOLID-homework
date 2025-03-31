import { EMAIL, NotifierFactory } from './NotifierFactory';
import EmailNotifier from './email/EmailNotifier';

describe('NotifierFactory', () => {
  it('should create an email notifier', () => {
    const notifier = NotifierFactory.create(EMAIL);
    expect(notifier).toBeInstanceOf(EmailNotifier);
  });

  it('should throw an error for unsupported notifier types', () => {
    expect(() => {
      NotifierFactory.create('unsupported' as never);
    }).toThrowError(/Notification unsupported is not supported/);
  });
});
