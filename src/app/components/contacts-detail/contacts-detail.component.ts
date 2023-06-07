import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routesParams } from 'src/app/constants/app-routes.constants';
import { IBusiness } from 'src/app/models/ibusiness.model';
import { IContact } from 'src/app/models/icontact.model';
import { BusinessService } from 'src/app/services/business.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent {
  contact:IContact;
  bussinesAll:IBusiness[];

  constructor(private _contactService:ContactService,
    private _bussinesService:BusinessService,
    private _activateRoute:ActivatedRoute,
    private _route:Router)
  {
    this.contact = this._contactService.new();
    this.bussinesAll = [];
  }
  ngOnInit(): void {
    
    this.loadBussines();

    if(this._activateRoute.snapshot.paramMap.has(routesParams.detail_id))
    {
      let id = this._activateRoute.snapshot.paramMap.get(routesParams.detail_id);
      if(id && id !== '')
      {
          this.loadContact(id);
      }
    }    
  }

  loadContact(id:any)
  {
    this._contactService.get(id).subscribe(response =>
      {
        this.contact = response;
      },
      error=>
      {
        alert(error);
      })
  }

  loadBussines()
  {
    this._bussinesService.getAll().subscribe(response =>
      {
        this.bussinesAll = response;
      },
      error=>
      {
        alert(error);
      })
  }

  onSubmit()
  {
    this._contactService.save(this.contact).subscribe
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
