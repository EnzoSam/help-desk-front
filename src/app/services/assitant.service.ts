import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirorments/envirorments';
import { IAssistant } from '../models/iassistant.model';
import { BaseService } from './baseService.service';

@Injectable({
  providedIn: 'root'
})
export class AssistantService extends BaseService{

  constructor(protected override _http: HttpClient)
  {
    super(_http);
  }  

  newAssistants():IAssistant
  {
      let a =
      {
        _id:undefined,
        name: '',
        nickNames:[],
        whatsappId:'',
        state:1
      }

      delete a._id;

      return a
  }

  getAssistants():Observable<IAssistant[]>
  {
    return this._http.get<IAssistant[]>(environment.baseApiUrl + 'assistant');
  }

  saveAssistants(assistant:IAssistant):Observable<IAssistant>
  {
    if(assistant._id && assistant._id != undefined)
      return this._http.post<IAssistant>(environment.baseApiUrl + 'assistant',assistant);
    else
      return this._http.put<IAssistant>(environment.baseApiUrl + 'assistant',assistant);
  }  

  get(id:any):Observable<IAssistant>
  {
    return this._http.get<IAssistant>(environment.baseApiUrl + 'assistant/' + id);
  }  

  delete(id:any):Observable<IAssistant>
  {
    return this._http.delete<IAssistant>(environment.baseApiUrl + 'assistant/' + id);
  }  

}
