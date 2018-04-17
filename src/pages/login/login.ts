import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home';
import {Parse} from 'parse';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  password: string = '';
   username: string = '';

  constructor(public nav: NavController) {

  }

  signup() {
    this.nav.setRoot(RegisterPage);
  }

  login() {
    var self=this;

    Parse.User.logIn(this.username, this.password, {
      success: function(user) {
        console.log("logged in "+user.get("username"));
        self.nav.setRoot(HomePage);
},
error: function(user, error) {
    console.log("did not work");
}
});
}
}
