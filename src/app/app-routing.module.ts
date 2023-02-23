import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTrainingComponent } from './order-training/order-training.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  {path: '', component: MainComponentComponent },
  {path: 'details', component: OrderTrainingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OrderTrainingComponent,OrderDetailsComponent,MainComponentComponent]
