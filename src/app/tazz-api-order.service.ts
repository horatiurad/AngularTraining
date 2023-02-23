import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import axios, { AxiosResponse } from 'axios';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TazzApiOrderService {

  private URL = '../assets/tazz-raw.json';


  constructor(private http:HttpClient) { }

  async placeTazzOrder(order: any):Promise<any>{
    let baseUrl = "http://localhost:9000/tazz/order";
    let options = { headers: {
      'x-security-key': '5njLFHLvq439nCeH',
      'Content-Type': 'application/json'
    }};

    return await axios.post<any>(baseUrl,order,options);
  }

  async placeGlovoOrder(order: any):Promise<any>{
    let baseUrl = "http://localhost:9000/glovo/order";   
    let options = { headers: {
      'Authorization': 'local-key',
      'Content-Type': 'application/json'
    }};

    return await axios.post<any>(baseUrl,order,options);
  }

  async takeTazzOrder():Promise<any>{
    return await  axios.get(this.URL);
  }
}
