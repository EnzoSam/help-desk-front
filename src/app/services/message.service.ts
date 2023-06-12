import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirorments/envirorments';
import { BaseService } from './baseService.service';
import { IMessage } from '../models/imessage.mode';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService{

  constructor(protected override _http: HttpClient)
  {
    super(_http);
  }  

  new():IMessage
  {
      let m =
      {
        _id:undefined,
        text: '',
        date:new Date(),
        from:undefined,
        to:undefined,
        role:'',
        type:'',
        referenceId:'',
        state:1
      }

      delete m._id;

      return m;
  }

  getAll():Observable<IMessage[]>
  {
    return this._http.get<IMessage[]>(environment.baseApiUrl + 'message');
  }

  getContactMessage(contactID:any):Observable<IMessage[]>
  {
    return this._http.get<IMessage[]>(environment.baseApiUrl + 'message/contact-messages/'+contactID);
  }


  save(message:IMessage):Observable<IMessage>
  {
    if(message._id && message._id != undefined)
      return this._http.post<IMessage>(environment.baseApiUrl + 'message',message);
    else
      return this._http.put<IMessage>(environment.baseApiUrl + 'message',message);
  }  

  get(id:any):Observable<IMessage>
  {
    return this._http.get<IMessage>(environment.baseApiUrl + 'message/' + id);
  }  

  delete(id:any):Observable<IMessage>
  {
    return this._http.delete<IMessage>(environment.baseApiUrl + 'message/' + id);
  }  

  sendMessage(message:IMessage):Observable<IMessage>
  {
    return this._http.post<IMessage>(environment.baseApiUrl + 'message/send',message);
  }
}
