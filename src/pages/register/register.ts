import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public nav: NavController) {

  }

  sign() {
    var user = new Parse.User();

      user.set("email", this.email);
      user.set("name", this.username);
      user.set("password", this.password);

      var self = this;

      user.signUp(null, {
        succes: function(user) {
          console.log("succes");
          this.nav.setRoot(HomePage);
      },
        error: function(user, error){
          console.log("fail");
      }
   })
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
