import { Component, OnInit } from '@angular/core';
import { routesParams, routesPaths } from 'src/app/constants/app-routes.constants';
import { IAssistant } from 'src/app/models/iassistant.model';
import { AssistantService } from 'src/app/services/assitant.service';

@Component({
  selector: 'app-assistants-list',
  templateUrl: './assistants-list.component.html',
  styleUrls: ['./assistants-list.component.css']
})
export class AssistantsListComponent implements OnInit{

  displayedColumns: string[] = ['name','edit','delete'];
  assistants:IAssistant[];
  routes:any;
  routesParam:any;

  constructor(private _assistantService:AssistantService)
  {
    this.assistants = [];
    this.routes = routesPaths;
    this.routesParam = routesParams;
  }
  ngOnInit(): void {
    
    this.loadAssistants();
  }

  loadAssistants()
  {
    this._assistantService.getAssistants
    ().subscribe(response=>
      {
        this.assistants = response;
      },
      error=>
      {
        alert(error);
      })
  }

  deleteAssistant(assistant:IAssistant)
  {
    this._assistantService.delete
    (assistant._id).subscribe(response=>
      {
          this.loadAssistants();
      },
      error=>
      {
        alert(error);
      })      
  }
}
