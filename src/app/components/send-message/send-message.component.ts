import { Component, Input } from '@angular/core';
import { IContact } from 'src/app/models/icontact.model';
import { IMessage } from 'src/app/models/imessage.mode';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {

  @Input() contact?:IContact;
  message: IMessage;

  constructor(private _messageService:MessageService)
  {
    this.message = _messageService.new();
  }

  sendMessage()
  {
    this.message.to = this.contact;
    console.log(this.message);
    if(!this.message.text || this.message.text === '' || this.message.text === null)
      return;

      this._messageService.sendMessage(this.message).subscribe(response=>
      {
          this.message.text = '';
      },
      error=>
      {
        alert(JSON.stringify(error));
      })
  }

}
