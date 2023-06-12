import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routesParams } from 'src/app/constants/app-routes.constants';
import { IAssistant } from 'src/app/models/iassistant.model';
import { ITiketAssignation } from 'src/app/models/itiketAssignation.model';
import { Tiket } from 'src/app/models/tiket.model';
import { AssistantService } from 'src/app/services/assitant.service';
import { TiketService } from 'src/app/services/tiket.service';

@Component({
  selector: 'app-assign-tiket-assistant',
  templateUrl: './assign-tiket-assistant.component.html',
  styleUrls: ['./assign-tiket-assistant.component.css']
})
export class AssignTiketAssistantComponent implements OnInit{

  tiket:Tiket;
  assistants:IAssistant[];
  tiketAssignation:ITiketAssignation;

  constructor(private _tiketService:TiketService,
    private _assistantsService:AssistantService,
    private _activateRoute:ActivatedRoute,
    private _route:Router)
  {
    this.assistants = [];
    this.tiket = this._tiketService.newTiket();
    this.tiketAssignation = this._tiketService.newTiketAssignation();
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
    this.tiketAssignation.idTiket = this.tiket._id;
    this._tiketService.assingAssistant(this.tiketAssignation).subscribe
    (response=>
      {
        if(response.status && response.status == 'ok')
            this._route.navigate([".."]);
        else
          alert(response.message);
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

 assistantChange()
 {
  console.log(this.tiketAssignation);
   if(this.tiketAssignation.idAssistant  &&
     this.tiketAssignation.idAssistant != undefined)
     {
        let a = this.assistants.find(x=>x._id == this.tiketAssignation.idAssistant);

        this.tiketAssignation.greeting = 
        'Hola ' + this.tiket.getCustomerView() + '! ' + a?.name + ' te escribe. ' +
        '\n Su codigo de tiket es: ' + this.tiket._id + ". \n";
     }
 }

}
