

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  quantity!: number;
  selectedFlavour: string = '';
  subtotal!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Placeholder values for demonstration, replace with actual implementation
    this.quantity = 6; // Example quantity
    this.selectedFlavour = 'Chocolate'; // Example selected flavour
    this.subtotal = this.quantity * 2; // Example subtotal calculation
  }

  cancel() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/flavour', this.quantity]);
  }

  sendOrder() {
    // You can implement sending order logic here
    // For now, let's just navigate back to the first page
    this.router.navigate(['/']);
  }
}
