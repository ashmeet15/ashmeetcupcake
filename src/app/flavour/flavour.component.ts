

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.css']
})
export class FlavourComponent implements OnInit {
  quantity!: number;
  selectedFlavour: string = '';
  subtotal!: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const quantityParam = this.route.snapshot.paramMap.get('quantity');
    if (quantityParam) {
      this.quantity = +quantityParam;
    } else {

      this.router.navigate(['/']);
    }
    this.calculateSubtotal();
  }

  calculateSubtotal() {
    this.subtotal = this.quantity * 2; // $2 per cupcake
  }

  cancel() {
    this.router.navigate(['/']);
  }



  goNext() {
    this.router.navigate(['/order']);
  }
}
