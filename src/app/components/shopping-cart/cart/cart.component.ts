import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    { id: 1, productId: 1, productName: 'Set de dados', qty: 5, price: 100 },
    { id: 2, productId: 2, productName: 'Figuras de accion', qty: 5, price: 50 },
    { id: 3, productId: 3, productName: 'Manual de mounstros', qty: 3, price: 150 },
    { id: 4, productId: 4, productName: 'Manual de dungeon master', qty: 2, price: 200 },
  ];

  cartTotal = 0

  constructor() { }

  ngOnInit() {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
