import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { FlavourComponent } from './flavour/flavour.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    CupcakeComponent,
    FlavourComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CupcakeComponent },
      { path: 'flavour/:quantity', component: FlavourComponent },
      { path: 'order', component: OrderComponent },
      { path: '', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
