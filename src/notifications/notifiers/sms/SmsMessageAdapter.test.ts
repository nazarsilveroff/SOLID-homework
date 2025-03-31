import SmsMessageAdapter from './SmsMessageAdapter';

describe('SmsMessageAdapter', () => {
  let adapter: SmsMessageAdapter;
  beforeEach(() => {
    adapter = new SmsMessageAdapter();
  });
  it('should format a message correctly', () => {
    const message = {
      title: 'Test Title',
      subject: 'Test Subject',
      body: 'Test Body',
    };
    const formattedMessage = adapter.format(message);
    expect(formattedMessage).toBe('Test Title - Test Subject - Test Body');
  });
});
