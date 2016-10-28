import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SignUp } from '../signup/signup';
import { ForgotPass } from '../forgotpass/forgotpass';

@Component({
  selector: 'home-home',
  templateUrl: 'home.html'
})
export class Home {
  email : any;
  password : any;
  constructor(public navCtrl: NavController) {
    
  }
  login(){
    //do login method
  }
  signup(){
    //do signup method 
    this.navCtrl.push(SignUp);
  }
  forgotPass(){
    this.navCtrl.push(ForgotPass);
  }

}
