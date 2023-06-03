import { Component, OnInit } from '@angular/core';
import { routesParams, routesPaths } from 'src/app/constants/app-routes.constants';
import { IBusiness } from 'src/app/models/ibusiness.model';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit{

  displayedColumns: string[] = ['name','edit','delete'];
  business:IBusiness[];
  routes:any;
  routesParam:any;

  constructor(private _businessService:BusinessService)
  {
    this.business = [];
    this.routes = routesPaths;
    this.routesParam = routesParams;
  }
  ngOnInit(): void {
    
    this.loadBusiness();
  }

  loadBusiness()
  {
    this._businessService.getAll
    ().subscribe(response=>
      {
        this.business = response;
      },
      error=>
      {
        alert(error);
      })
  }

  deleteAssistant(assistant:IBusiness)
  {
    this._businessService.delete
    (assistant._id).subscribe(response=>
      {
          this.loadBusiness();
      },
      error=>
      {
        alert(error);
      })      
  }
}
