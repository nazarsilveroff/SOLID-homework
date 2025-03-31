import { INotificationMessageAdapter } from '../../interfaces/INotificationMessageAdapter';
import { INotificationMessage } from '../../interfaces/INotificationMessage';

export default class EmailMessageAdapter implements INotificationMessageAdapter {
  format(massage: INotificationMessage): string {
    return `
    <html>
      <body>
        <h1>${massage.title}</h1>
        <h2>${massage.subject}</h2>
        <p>${massage.body}</p>
      </body>
    </html>
    `;
  }
}
