import {Injectable} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {DRIVER} from './mock-driver';

@Injectable()
export class DriverService {
  private driver:any;

  constructor() {
    this.driver = DRIVER;
  }

  getCurrentDriver() {
    return this.driver;
  }
}
