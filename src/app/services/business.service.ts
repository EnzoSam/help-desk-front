import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirorments/envirorments';
import { BaseService } from './baseService.service';
import { IBusiness } from '../models/ibusiness.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends BaseService{

  constructor(protected override _http: HttpClient)
  {
    super(_http);
  }  

  new():IBusiness
  {
      let b =
      {
        _id:undefined,
        name: '',
        state:1
      }

      delete b._id;

      return b
  }

  getAll():Observable<IBusiness[]>
  {
    return this._http.get<IBusiness[]>(environment.baseApiUrl + 'business');
  }

  save(assistant:IBusiness):Observable<IBusiness>
  {
    if(assistant._id && assistant._id != undefined)
      return this._http.post<IBusiness>(environment.baseApiUrl + 'business',assistant);
    else
      return this._http.put<IBusiness>(environment.baseApiUrl + 'business',assistant);
  }  

  get(id:any):Observable<IBusiness>
  {
    return this._http.get<IBusiness>(environment.baseApiUrl + 'business/' + id);
  }  

  delete(id:any):Observable<IBusiness>
  {
    return this._http.delete<IBusiness>(environment.baseApiUrl + 'business/' + id);
  }  

}
