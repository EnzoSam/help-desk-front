import { Component, OnInit } from '@angular/core';
import { routesParams, routesPaths } from 'src/app/constants/app-routes.constants';
import { IContact } from 'src/app/models/icontact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{

  displayedColumns: string[] = ['name','edit','delete'];
  contacts:IContact[];
  routes:any;
  routesParam:any;

  constructor(private _contactService:ContactService)
  {
    this.contacts = [];
    this.routes = routesPaths;
    this.routesParam = routesParams;
  }
  ngOnInit(): void {
    
    this.loadContacts();
  }

  loadContacts()
  {
    this._contactService.getAll
    ().subscribe(response=>
      {
        this.contacts = response;
      },
      error=>
      {
        alert(error);
      })
  }

  deleteContact(contact:IContact)
  {
    this._contactService.delete
    (contact._id).subscribe(response=>
      {
          this.loadContacts();
      },
      error=>
      {
        alert(error);
      })      
  }
}
