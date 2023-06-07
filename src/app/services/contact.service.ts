import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirorments/envirorments';
import { BaseService } from './baseService.service';
import { IContact } from '../models/icontact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService{

  constructor(protected override _http: HttpClient)
  {
    super(_http);
  }  

  new():IContact
  {
      let b =
      {
        _id:undefined,
        name: '',
        reference:'',
        type:'',
        contact:undefined,
        state:1
      }

      delete b._id;

      return b
  }

  getAll():Observable<IContact[]>
  {
    return this._http.get<IContact[]>(environment.baseApiUrl + 'contact');
  }

  save(contact:IContact):Observable<IContact>
  {
    if(contact._id && contact._id != undefined)
      return this._http.post<IContact>(environment.baseApiUrl + 'contact',contact);
    else
      return this._http.put<IContact>(environment.baseApiUrl + 'contact',contact);
  }  

  get(id:any):Observable<IContact>
  {
    return this._http.get<IContact>(environment.baseApiUrl + 'contact/' + id);
  }  

  delete(id:any):Observable<IContact>
  {
    return this._http.delete<IContact>(environment.baseApiUrl + 'contact/' + id);
  }  

}
