import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routesParams } from 'src/app/constants/app-routes.constants';
import { IContact } from 'src/app/models/icontact.model';
import { IMessage } from 'src/app/models/imessage.mode';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit
{
  @Input() contact?:IContact;
  messages:IMessage[];

  constructor(private _messageService:MessageService,
    private _activateRoute:ActivatedRoute,
    private _route:Router)
  {
    this.messages=[];
  }

  ngOnInit(): void {

    console.log(this.contact);
    if(this._activateRoute.snapshot.paramMap.has(routesParams.contact_id))
    {
      let id = this._activateRoute.snapshot.paramMap.get(routesParams.contact_id);
      if(id && id !== '')
      {
          this.loadMessages(id);
      }
    }
    else if(this.contact)
      {
        this.loadMessages(this.contact._id);
      }
  }

  loadMessages(contact_id:any)
  {
    this._messageService.getContactMessage(contact_id).subscribe(response=>
      {
        this.messages = response;
        console.log(this.messages);
      },
      error=>
      {
        alert(JSON.stringify(error));
      })
  }


}
