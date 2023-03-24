import { Component, OnInit } from '@angular/core';
import { routesParams, routesPaths } from 'src/app/constants/app-routes.constants';
import { ITiket } from 'src/app/models/itiket.model';
import { TiketService } from 'src/app/services/tiket.service';

@Component({
  selector: 'app-tikets-list',
  templateUrl: './tikets-list.component.html',
  styleUrls: ['./tikets-list.component.css']
})
export class TiketsListComponent implements OnInit{

  tikets:ITiket[];
  displayedColumns: string[] = ['customeWhatsappId','customeName','createdAt'];
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
        console.log(this.tikets);
      },
      error=>
      {
        alert(error);
      })
  }
}
