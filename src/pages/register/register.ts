import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import {Parse} from "parse";

/*
  Generated class for the RegisterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  password: string = '';
   username: string = '';
   email: string = '';

  constructor(public nav: NavController, public alertCtrl: AlertController) {
    Parse.initialize("JtT43pNpUfyZkEYtTIovw3nwtXR26Z2EwhyNbF6U", "1TTtwpkT5sMvz0dOzF9HBtWyOrN0f4EKA3ALOK03");
    Parse.serverURL = "https://parseapi.back4app.com/";

  }

  sign() {
    var user = new Parse.User();

      user.set("email", this.email);
      user.set("username", this.username);
      user.set("password", this.password);


      user.signUp(null, {
        succes: function(user) {
          console.log("succes");
      },
        error: function(user, error){
          let alert = this.alertCtrl.create({
            title: 'Error, ' + error.code ,
            subTitle: ' '  + error.message,
            buttons: ['Dismiss']
          });
          alert.present();
          console.log("failBoat" + error.code + " " + error.message);
      }
      });

      let alert = this.alertCtrl.create({
        title: 'Welcome to Campus Delivery ',
        subTitle: ' Go login to enjoy the app',
        buttons: ['Ight']
      });
      alert.present();




  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
