import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routesParams, routesPaths } from 'src/app/constants/app-routes.constants';
import { Tiket } from 'src/app/models/tiket.model';
import { TiketService } from 'src/app/services/tiket.service';

@Component({
  selector: 'app-tiket-chat',
  templateUrl: './tiket-chat.component.html',
  styleUrls: ['./tiket-chat.component.css']
})
export class TiketChatComponent implements OnInit{

  tiket?:Tiket;
  routes:any;

  constructor(private _tiketService:TiketService,
    private _activateRoute:ActivatedRoute,
    private _route:Router)
  {
    this.routes = routesPaths;
  }

  ngOnInit(): void {
    
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
}
