import { Component, OnInit } from '@angular/core';
import { TazzApiOrder } from '../tazz-api-order';
import { TazzApiOrderService } from '../tazz-api-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit{
  title = 'order-placer';
  orders: any;
  response: any;
  listObiecte!: Object[];
  aux : any;
  tazzOrders : TazzApiOrder[] | undefined;
  selectedOrder!: any;
  sortedList!: Object[];
  public searchInput!: string;
  obiect!: string;
  constructor(private data: DataService,private tazzService: TazzApiOrderService,private router :Router,private route: ActivatedRoute){}



  stringify(order:any):string{
  return JSON.stringify(order);
}

onSelect(order: Object): void { 
  this.selectedOrder=order;
  this.data.changeStatus(order);
  //separare actiuni (inca un buton pentru send, sa dispara cand e trimis order ul)
  this.router.navigate(['details', { relativeTo: this.route }]);
} 
onSelectSEND(order: Object): void {
  this.sendOrder(order);
}
  async sendOrder(order:Object):Promise<void>{
    const sleep = (ms: number | undefined) => new Promise(r => setTimeout(r, ms));
    this.aux=order;
  if(this.aux.isSent==0){
    if(this.aux.order_id!=null){
      // await this.tazzService.placeGlovoOrder(this.listObiecte[i]); 
      // await sleep(10);
      console.log("am trimis un glovo order");
      this.aux.isSent=1;
     order=this.aux;
    }else{
      // await this.tazzService.placeTazzOrder(this.listObiecte[i]);
     // await sleep(10);
      console.log("am trimis un tazz  order");
      this.aux.isSent=1;
     order=this.aux;
    }
  }
}

  async sendAll(){
  for (let i = 0; i < this.listObiecte.length; i++) {
   this.sendOrder(this.listObiecte[i]);
  }
}

  async ngOnInit(){
    console.log("start of this function-------------");
    this.orders=await this.tazzService.takeTazzOrder();

    this.listObiecte=this.orders.data.objList;
      
    for (let i = 0; i < this.listObiecte.length; i++) {
        this.aux=this.listObiecte[i];
        this.aux.isSent=0;
        this.listObiecte[i]=this.aux;
    }
    console.log("end of this function-----------------");
    this.data.currentStatus.subscribe((status: any) => this.obiect = status)
  }

}
