import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.fetchData().subscribe((data) => {
      this.carts = data;
      console.log(this.carts);
    });
  }

  increment(product: any): void {
    product.quantity++;
  }

  decrement(product: any): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  // Method to navigate to AboutComponent with userId
  goToAbout(userId: number): void {
    this.router.navigate(['/about', userId]);
  }
}
