import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirorments/envirorments';
import { BaseService } from './baseService.service';
import { IMessage } from '../models/imessage.mode';
import { IReportOptions } from '../models/ireports-options';
import { ReportResume } from '../models/reportResume.model';
import { TiketService } from './tiket.service';
import { AssistantService } from './assitant.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseService{

  constructor(protected override _http: HttpClient,
    private _tiketService:TiketService,
    private _assistantsService:AssistantService)
  {
    super(_http);
  }  

  newOptions():IReportOptions
  {
      let m =
      {
        dateFrom:new Date(),
        dateTo:new Date(),

      }

      return m;
  }

  getReport(options:IReportOptions):Promise<ReportResume>
  {
    return new Promise((resolve, reject)=>{
      this._tiketService.getTikets().subscribe(tikets=>
        {
          this._assistantsService.getAssistants().subscribe(assistants=>
            {
              let report = new ReportResume 
              (options.dateFrom,options.dateTo, [],[]);
              report.tikets = tikets
              report.assistants = assistants;
              resolve(report);
            },
            error=>{
              reject(error);
            });
        },
        error=>
        {
            reject(error);
        }
        );
      });      
  }  
}
