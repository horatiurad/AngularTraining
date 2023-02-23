import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private statusSource = new BehaviorSubject('default status'); // set default status
  currentStatus = this.statusSource.asObservable();

  constructor() { }

  changeStatus(status: any) {
    this.statusSource.next(status)
  }
}
