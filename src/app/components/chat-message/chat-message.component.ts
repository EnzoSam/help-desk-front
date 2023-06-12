import { Component, Input } from '@angular/core';
import { IMessage } from 'src/app/models/imessage.mode';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {

  @Input() message?:IMessage;

  constructor()
  {

  }
}
