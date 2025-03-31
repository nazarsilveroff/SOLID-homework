import EmailMessageAdapter from './EmailMessageAdapter';

describe('EmailMessageAdapter', () => {
  let adapter: EmailMessageAdapter;
  beforeEach(() => {
    adapter = new EmailMessageAdapter();
  });
  it('should format a message correctly', () => {
    const message = {
      title: 'Test Title',
      subject: 'Test Subject',
      body: 'Test Body',
    };
    const formattedMessage = adapter.format(message);
    expect(formattedMessage).toContain('<h1>Test Title</h1>');
    expect(formattedMessage).toContain('<h2>Test Subject</h2>');
    expect(formattedMessage).toContain('<p>Test Body</p>');
  });
});
