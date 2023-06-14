import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routesParams, routesPaths } from 'src/app/constants/app-routes.constants';
import { Tiket } from 'src/app/models/tiket.model';
import { Utils } from 'src/app/services/assitant.service copy';
import { TiketService } from 'src/app/services/tiket.service';

@Component({
  selector: 'app-tiket-chat',
  templateUrl: './tiket-chat.component.html',
  styleUrls: ['./tiket-chat.component.css']
})
export class TiketChatComponent implements OnInit {

  tiket?: Tiket;
  routes: any;
  duration: any;

  constructor(private _tiketService: TiketService,
    private _activateRoute: ActivatedRoute,
    private _utils: Utils,
    private _route: Router) {
    this.routes = routesPaths;
    this.duration = { hours: 0, minutes: 0 };
  }

  ngOnInit(): void {

    if (this._activateRoute.snapshot.paramMap.has(routesParams.detail_id)) {
      let id = this._activateRoute.snapshot.paramMap.get(routesParams.detail_id);
      if (id && id !== '') {
        this.loadTiket(id);
      }
    }
  }

  loadTiket(id: any) {
    this._tiketService.get(id).subscribe(response => {
      this.tiket = response;

      if (this.tiket.createdAt && this.tiket.closedAt)
        this.duration =
          this._utils.getDuration(this.tiket.createdAt, this.tiket.closedAt);
      else if (this.tiket.createdAt)
        this.duration =
          this._utils.getDuration(this.tiket.createdAt, undefined);
    },
      error => {
        alert(error);
      })
  }

}
