import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routesParams } from 'src/app/constants/app-routes.constants';
import { IBusiness } from 'src/app/models/ibusiness.model';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent {
  business:IBusiness;

  constructor(private _businessService:BusinessService,
    private _activateRoute:ActivatedRoute,
    private _route:Router)
  {
    this.business = this._businessService.new();
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
    this._businessService.get(id).subscribe(response =>
      {
        this.business = response;
      },
      error=>
      {
        alert(error);
      })
  }

  onSubmit()
  {
    this._businessService.save(this.business).subscribe
    (response=>
      {
          this._route.navigate([".."]);
      },error=>
      {
        alert(error);
      })
  }
}
