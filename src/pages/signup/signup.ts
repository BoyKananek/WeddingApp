import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'signup-signup',
  templateUrl: 'signup.html'
})
export class SignUp {
  email : any;
  password : any;
  constructor(public navCtrl: NavController) {
    
  }

}
