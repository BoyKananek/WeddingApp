import { Component } from '@angular/core';

import { NavController,AlertController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'signup-signup',
  templateUrl: 'signup.html'
})
export class SignUp {
  username : any;
  email : any;
  password : any;
  repassword : any;
  private disableSubmit :boolean = false;
  constructor(public navCtrl: NavController,private http: Http,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
    
  }
  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  backhome(){
    this.navCtrl.pop();
  }
  signup(){
    this.disableSubmit = true;
    var data = {
        username : this.username,
        email : this.email,
        password : this.password,
        repassword : this.repassword
      };
    if (!this.username || !this.email || !this.password || !this.repassword) {
      var alert = this.alertCtrl.create({
          title: "Sign up fail",
          subTitle: "Please fill in the information above!",
          buttons: ["close"]
        });
        alert.present();
        this.disableSubmit = false;
    }else if (!this.validateEmail(this.email)){
      var alert = this.alertCtrl.create({
          title: "Sign up fail",
          subTitle: "Please enter your email in email format",
          buttons: ["close"]
        });
        alert.present();
        this.disableSubmit = false;
    } else if (this.password != this.repassword){
      var alert = this.alertCtrl.create({
          title: "Sign up fail",
          subTitle: "Password and Re password must be the same!",
          buttons: ["close"]
        });
        alert.present();
        this.disableSubmit = false;
    } else if (this.password.length < 8){
      var alert = this.alertCtrl.create({
        title: "Sign up fail",
        subTitle: "Password length should equal to 8 character or more than",
        buttons : ["close"]
      })
      alert.present();
      console.log('Password is too short');
      this.disableSubmit = false ;
    }
    else{
      this.http.post("https://weddinginitiative.herokuapp.com/api/signup",data)
        .subscribe(data =>{
          var alert = this.alertCtrl.create({
            title: "Sign up successful",
            subTitle: "Please verify your email address",
            buttons: ["close"]
          });
        alert.present();
        this.disableSubmit = false;
        this.navCtrl.pop();
        },error => {
          //alert(JSON.stringify(error.json()));
          var alert = this.alertCtrl.create({
            title: "Sign up fail",
            subTitle: "The email are already existing",
            buttons: ["close"]
          });
          alert.present();
          this.disableSubmit = false;
        });
      }
  }
}
