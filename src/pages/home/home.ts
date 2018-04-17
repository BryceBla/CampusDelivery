import {Component} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {App,NavController, ModalController, AlertController} from 'ionic-angular';
import {DriverService} from '../../services/driver-service';
import {ModalJobPage} from '../modal-job/modal-job';
import {PickUpPage} from '../pick-up/pick-up';
import {DataProvider} from '../../providers/data/data';
import {Parse} from 'parse';
//import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // driver info
  public driver:any;
  newOrder={ Location: null, Image: null, Description: null,
   Destination: null, Name: null, PhoneNumber:null};
  orderItems=[];

  constructor(public DataProvider: DataProvider,public driverService: DriverService, public nav: NavController, public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
              this.listOrders();
    // get driver info from service
    this.driver = driverService.getCurrentDriver();

    // show modal
    let modal = this.modalCtrl.create(ModalJobPage);

    // listen for modal close
    modal.onDidDismiss(confirm => {
      if (confirm) {
        // show confirm box
        this.confirmJob();
      } else {
        // do nothing
      }
    });

    setTimeout(() => {
      //modal.present();
    });
  }
  public listOrders(): Promise<any> {
  let offset = this.orderItems.length;
  let limit = 10;
  return this.DataProvider.getOrders(offset, limit).then((result) => {
    for (let i = 0; i < result.length; i++) {
      let object = result[i];
      this.orderItems.push(object);
    }
  }, (error) => {
    console.log(error);
  });
}
public postOrder() {
  this.DataProvider.addOrder(this.newOrder).then((orderItem) => {
    this.orderItems.push(orderItem);
    this.newOrder.Location = null;
    this.newOrder.Image = null;
    this.newOrder.Description = null;
    this.newOrder.Destination = null;
    this.newOrder.Name = null;
    this.newOrder.PhoneNumber = null;
  }, (error) => {
    console.log(error);
    alert('Error adding item.');
  });
}
  // make array with range is n
  range(n) {
    return new Array(n);
  }

  // confirm a job
  confirmJob() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            // go to pickup page
            this.nav.setRoot(PickUpPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
