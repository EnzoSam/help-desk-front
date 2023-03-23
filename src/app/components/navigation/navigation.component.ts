import { Component } from '@angular/core';
import { site } from 'src/app/constants/app-routes.constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  siteName:string;
  constructor()
  {
    this.siteName = site.name;
  }

}
