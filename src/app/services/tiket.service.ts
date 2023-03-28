import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirorments/envirorments';
import { IAssistant } from '../models/iassistant.model';
import { ITiketAssignation } from '../models/itiketAssignation.model';
import { Tiket } from '../models/tiket.model';
import { BaseService } from './baseService.service';

@Injectable({
  providedIn: 'root'
})
export class TiketService extends BaseService{

  constructor(protected override _http: HttpClient)
  {
    super(_http);
  }  

  newTiket():Tiket
  {
    let tiket = new Tiket(
        undefined,
        '',
        '',
        '',
        1,
        undefined,        
        undefined,
        undefined
    );

      delete tiket._id;
      delete tiket.createdAt;
      delete tiket.updatedAt;

      return tiket
  }

  newTiketAssignation():ITiketAssignation  
  {
    return {
      idTiket:undefined,
      idAssistant:undefined,
      sendGreeting:true,
      greeting:''
    }
  }

  getTikets(state:number):Observable<Tiket[]>
  {
    return this._http.get<Tiket[]>(environment.baseApiUrl + 'tiket/' + state);
  }

  save(tiket:Tiket):Observable<Tiket>
  {
    console.log(tiket);
    if(tiket._id && tiket._id != undefined)
      return this._http.post<Tiket>(environment.baseApiUrl + 'tiket',tiket);
    else
      return this._http.put<Tiket>(environment.baseApiUrl + 'tiket',tiket);
  }  

  get(id:any):Observable<Tiket>
  {
    return this._http.get<Tiket>(environment.baseApiUrl + 'tiket/detail/' + id);
  }  

  delete(id:any):Observable<Tiket>
  {
    return this._http.delete<Tiket>(environment.baseApiUrl + 'tiket/' + id);
  }  

  assingAssistant(tiketAssignation:ITiketAssignation):Observable<any>
  {
      return this._http.post
      (environment.baseApiUrl + 'tiket/assignation',tiketAssignation);
  }  
}
