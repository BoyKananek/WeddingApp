import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'home-home',
  templateUrl: 'home.html'
})
export class Home {
  email : any;
  password : any;
  constructor(public navCtrl: NavController) {
    
  }

}
