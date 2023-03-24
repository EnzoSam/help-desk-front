import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routesParams } from 'src/app/constants/app-routes.constants';
import { IAssistant } from 'src/app/models/iassistant.model';
import { AssistantService } from 'src/app/services/assitant.service';

@Component({
  selector: 'app-assistants-detail',
  templateUrl: './assistants-detail.component.html',
  styleUrls: ['./assistants-detail.component.css']
})
export class AssistantsDetailComponent implements OnInit{

  assistant:IAssistant;

  constructor(private _assistantService:AssistantService,
    private _activateRoute:ActivatedRoute,
    private _route:Router)
  {
    this.assistant = this._assistantService.newAssistants();
  }
  ngOnInit(): void {
    
    if(this._activateRoute.snapshot.paramMap.has(routesParams.detail_id))
    {
      let id = this._activateRoute.snapshot.paramMap.get(routesParams.detail_id);
      if(id && id !== '')
      {
          this.loadAssistant(id);
      }
    }    
  }

  loadAssistant(id:any)
  {
    this._assistantService.get(id).subscribe(response =>
      {
        this.assistant = response;
      },
      error=>
      {
        alert(error);
      })
  }

  onSubmit()
  {
    this._assistantService.saveAssistants(this.assistant).subscribe
    (response=>
      {
          this._route.navigate([".."]);
      },error=>
      {
        alert(error);
      })
  }
}
