import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {JobService} from '../../services/job-service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalJobPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-job',
  templateUrl: 'modal-job.html'
})
export class ModalJobPage {
  // job info
  public job: any;

  public Image;
  public Destination;
  public Description;
  public location;
  public Name;
  public PhoneNumber;
  // remaining time for countdown
  public remainingTime = 20;

  constructor(public viewCtrl: ViewController,public navParams: NavParams, public jobService: JobService) {
    // get job info from service

    this.Image=navParams.get('Image');
    this.Destination=navParams.get('Destination');
    this.Description=navParams.get('Description');
    this.location=navParams.get('Location');
    this.Name=navParams.get('Name');
    this.PhoneNumber=navParams.get('PhoneNumber');

    // start count down

  }

  // close modal
  close() {
    this.viewCtrl.dismiss();
  }

  // count down
/*countDown() {
    let interval = setInterval(() => {
      this.remainingTime--;

      // if time is over
      if (this.remainingTime == 0) {
        // stop interval
        clearInterval(interval)
        this.viewCtrl.dismiss();
      }
    }, 1000);
  }*/

  // accept job
  accept() {
    // close and accept a job
    this.viewCtrl.dismiss(true);
  }
}
