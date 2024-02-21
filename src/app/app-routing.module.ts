import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { FlavourComponent } from './flavour/flavour.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: CupcakeComponent },
  { path: 'flavour/:quantity', component: FlavourComponent },
  { path: 'order', component: OrderComponent },
  { path: '', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
