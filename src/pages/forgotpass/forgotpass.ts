import { Component } from '@angular/core';

import { NavController,AlertController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'forgotpass-forgotpass',
  templateUrl: 'forgotpass.html'
})
export class ForgotPass {
  email : any;
  disableSubmit: boolean = false;
  constructor(public navCtrl: NavController,private http: Http,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
    
  }
  validateEmail(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
  }
  requestToresetPass(){
        this.disableSubmit = true;
        if (!this.email){
            var alert = this.alertCtrl.create({
            title: "Request fail",
            subTitle: "Please enter your email",
            buttons: ["close"]
            });
            alert.present();
            this.disableSubmit = false;
        }
        else if (!this.validateEmail(this.email)){
            var alert = this.alertCtrl.create({
            title: "Request fail",
            subTitle: "Please enter your email in email format",
            buttons: ["close"]
            });
            alert.present();
            this.disableSubmit = false;
        }
        else{
            var data = {
                email : this.email
            };
            this.http.post("https://weddinginitiative.herokuapp.com/api/forgotPassword",data)
            .subscribe( data =>{
                var alert = this.alertCtrl.create({
                title: "Reset password proceed",
                subTitle: "Please check your email address to continue",
                buttons: ["close"]
            });
                alert.present();
                this.disableSubmit = false;
                this.navCtrl.pop();
            },error =>{
                var alert = this.alertCtrl.create({
                title: "Server down!",
                buttons: ["close"]
                });
                alert.present();
                this.disableSubmit = false;
            });
        }
    }

}
