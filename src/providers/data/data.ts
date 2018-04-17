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
  //private parseAppID: string = "JtT43pNpUfyZkEYtTIovw3nwtXR26Z2EwhyNbF6U", "1TTtwpkT5sMvz0dOzF9HBtWyOrN0f4EKA3ALOK03";
  private parseServerUrl: string = "https://parseapi.back4app.com/";
  constructor(){
        Parse.initialize("JtT43pNpUfyZkEYtTIovw3nwtXR26Z2EwhyNbF6U", "1TTtwpkT5sMvz0dOzF9HBtWyOrN0f4EKA3ALOK03");
        Parse.serverURL = "https://parseapi.back4app.com/";

    console.log('Hello DataProvider Provider');
    console.log('Initiated Parse');

   const User = Parse.Object.extend('User');
   let query = new Parse.Query(User);
   query.limit(1000);
   query.find().then((users) => {
     console.log(users.length)
   }, (error) => {
   });
  }
  public getOrders(offset: number = 0, limit: number = 20): Promise<any> {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        const OrderItems = Parse.Object.extend('OrderItems');
        let query = new Parse.Query(OrderItems);
        query.skip(offset);
        query.limit(limit);
        query.find().then((orderItems) => {
          resolve(orderItems);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }
  public addOrder(newOrder): Promise<any> {
  const OrderItem = Parse.Object.extend('OrderItems');

  let order = new OrderItem();
  order.set('Location', newOrder.Location);
  order.set('Image', newOrder.Image);
  order.set('Description', newOrder.Description);
  order.set('Destination', newOrder.Destination);
  order.set('Name', newOrder.Name);
  order.set('PhoneNumber', parseInt(newOrder.PhoneNumber));

  return order.save(null, {
    success: function (order) {
      console.log(order);
      return order;
    },
    error: function (order, error) {
      console.log(error);
      return error;
    }
  });
}
}
