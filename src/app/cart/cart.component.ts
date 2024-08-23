import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.fetchData().subscribe((data) => {
      this.carts = data; // Store the fetched data in the `carts` array
      console.log(data);
    });
  }
}
