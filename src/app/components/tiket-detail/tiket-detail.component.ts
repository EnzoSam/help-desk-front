import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routesParams } from 'src/app/constants/app-routes.constants';
import { IAssistant } from 'src/app/models/iassistant.model';
import { Tiket } from 'src/app/models/tiket.model';
import { AssistantService } from 'src/app/services/assitant.service';
import { TiketService } from 'src/app/services/tiket.service';

@Component({
  selector: 'app-tiket-detail',
  templateUrl: './tiket-detail.component.html',
  styleUrls: ['./tiket-detail.component.css']
})
export class TiketDetailComponent implements OnInit{

  tiket:Tiket;
  assistants:IAssistant[];

  constructor(private _tiketService:TiketService,
    private _assistantsService:AssistantService,
    private _activateRoute:ActivatedRoute,
    private _route:Router)
  {
    this.assistants = [];
    this.tiket = this._tiketService.newTiket();
  }
  ngOnInit(): void {
    
    this.loadAssistants();

    if(this._activateRoute.snapshot.paramMap.has(routesParams.detail_id))
    {
      let id = this._activateRoute.snapshot.paramMap.get(routesParams.detail_id);
      if(id && id !== '')
      {
          this.loadTiket(id);
      }
    }    
  }

  loadTiket(id:any)
  {
    this._tiketService.get(id).subscribe(response =>
      {
        this.tiket = response;
      },
      error=>
      {
        alert(error);
      })
  }

  loadAssistants()
  {
    this._assistantsService.getAssistants().subscribe(response =>
      {
        this.assistants = response;
      },
      error=>
      {
        alert(error);
      })
  }

  onSubmit()
  {   
    this._tiketService.save(this.tiket).subscribe
    (response=>
      {
          this._route.navigate([".."]);
      },error=>
      {
        alert(error);
      })
      
  }

  compareFn(a:any, b:any) {
    if(a != null && b != null)
      return a.id === b.id;
    else
        return false;
 }

}
