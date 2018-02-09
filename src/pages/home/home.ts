import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { SearchComponent } from '../../components/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    // private searchComp: SearchComponent
  ) {}


}
