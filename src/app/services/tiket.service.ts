import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirorments/envirorments';
import { IAssistant } from '../models/iassistant.model';
import { ITiket } from '../models/itiket.model';
import { BaseService } from './baseService.service';

@Injectable({
  providedIn: 'root'
})
export class TiketService extends BaseService{

  constructor(protected override _http: HttpClient)
  {
    super(_http);
  }  

  newTiket():ITiket
  {
      let a =
      {
        _id:undefined,
        customeWhatsappId: '',
        customeName: '',
        problemDescription:'',
        assistant:undefined,
        state:1,
        createdAt:undefined,
        updatedAt:undefined
      }

      delete a._id;
      delete a.createdAt;
      delete a.updatedAt;

      return a
  }

  getTikets(state:number):Observable<ITiket[]>
  {
    return this._http.get<ITiket[]>(environment.baseApiUrl + 'tiket/' + state);
  }

  saveAssistants(tiket:ITiket):Observable<ITiket>
  {
    if(tiket._id && tiket._id != undefined)
      return this._http.post<ITiket>(environment.baseApiUrl + 'tiket',tiket);
    else
      return this._http.put<ITiket>(environment.baseApiUrl + 'tiket',tiket);
  }  

  get(id:any):Observable<ITiket>
  {
    return this._http.get<ITiket>(environment.baseApiUrl + 'tiket/' + id);
  }  

  delete(id:any):Observable<ITiket>
  {
    return this._http.delete<ITiket>(environment.baseApiUrl + 'tiket/' + id);
  }  

}
