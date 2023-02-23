import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-order-training',
  templateUrl: './order-training.component.html',
  styleUrls: ['./order-training.component.css']
})
export class OrderTrainingComponent implements OnInit{
  
  constructor(private data: DataService,private route: ActivatedRoute, private router: Router) { }
  
  selectedOrderC!: any;
  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.selectedOrderC = status)
    // console.log("suntem in details")
    // console.log(this.selectedOrderC);
    // console.log("suntem in details dupa print")

  }
 
}
