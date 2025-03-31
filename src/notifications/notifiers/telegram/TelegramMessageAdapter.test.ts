import TelegramMessageAdapter from './TelegramMessageAdapter';

describe('TelegramMessageAdapter', () => {
  let adapter: TelegramMessageAdapter;
  beforeEach(() => {
    adapter = new TelegramMessageAdapter();
  });
  it('should format a message correctly', () => {
    const message = {
      title: 'Test Title',
      subject: 'Test Subject',
      body: 'Test Body',
    };
    const formattedMessage = adapter.format(message);
    expect(formattedMessage).toBe('*Test Title*\n' + '\n' + '_Test Subject_\n' + '\n' + 'Test Body');
  });
});
