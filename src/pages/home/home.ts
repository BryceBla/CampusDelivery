import {Component} from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import {DriverService} from '../../services/driver-service';
import {ModalJobPage} from '../modal-job/modal-job';
import {PickUpPage} from "../pick-up/pick-up";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // driver info
  public driver:any;

  constructor(public nav: NavController, public driverService: DriverService, public modalCtrl: ModalController,
              public alertCtrl: AlertController) {

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
      modal.present();
    },3000);
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
