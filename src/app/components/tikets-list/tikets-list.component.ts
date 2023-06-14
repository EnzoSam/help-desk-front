import { Component, OnInit } from '@angular/core';
import { routesParams, routesPaths } from 'src/app/constants/app-routes.constants';
import { Tiket } from 'src/app/models/tiket.model';
import { TiketService } from 'src/app/services/tiket.service';

@Component({
  selector: 'app-tikets-list',
  templateUrl: './tikets-list.component.html',
  styleUrls: ['./tikets-list.component.css']
})
export class TiketsListComponent implements OnInit{

  tikets:Tiket[];
  displayedColumns: string[] = 
  ['customeName','createdAt','assistant', 'state'];
  routes:any;
  routesParam:any;

  constructor(private _tiketService:TiketService)
  {
    this.tikets = [];
    this.routes = routesPaths;
    this.routesParam = routesParams;
  }
  ngOnInit(): void {
        
    this.loadTikets();

  }

  loadTikets()
  {
    this._tiketService.getTikets
    (1).subscribe(response=>
      {
        this.tikets = response;
      },
      error=>
      {
        alert(JSON.stringify(error));
      })
  }
}
