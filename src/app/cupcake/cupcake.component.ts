import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cupcake',
  templateUrl: './cupcake.component.html',
  styleUrls: ['./cupcake.component.css']
})
export class CupcakeComponent {

  constructor(private router: Router) {
  }

  selectCupcakes(quantity: number) {
    this.router.navigate(['/flavour', quantity]);
  }
}
