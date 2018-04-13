import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public Storage: Storage){
        Parse.initialize("JtT43pNpUfyZkEYtTIovw3nwtXR26Z2EwhyNbF6U", "1TTtwpkT5sMvz0dOzF9HBtWyOrN0f4EKA3ALOK03");
        Parse.serverURL = "https://parseapi.back4app.com/";

    console.log('Hello DataProvider Provider');
    console.log('Initiated Parse');

   const Menu = Parse.Object.extend('Menu');
   let query = new Parse.Query(Menu);
   query.limit(1000);
   query.find().then((menus) => {
     console.log(menus.length)
   }, (error) => {
   });
  }

}