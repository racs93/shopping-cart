import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Set de dados', 'Set de dados metalicos para jugar dungeons.', 200),
    new Product(2, 'Dragon Rojo', 'Figura de plastico de dragon rojo para Dungeons and Dragons.', 300, "https://cdn.myminifactory.com/assets/object-assets/5abcd7de6cb39/images/720X720-https-cdn-thingiverse-comrenders9388e0bf6ca63dd6b38429bcc9e6da3c70389ceb3a-display-large.jpg"),
    new Product(3, 'Dragon Blanco', 'Figura de plastico de dragon blanco para Dungeons and Dragons.', 250, "https://images-na.ssl-images-amazon.com/images/I/71tBQSFxDRL._AC_SY741_.jpg"),
    new Product(4, 'Set de figuras', 'Set de 24 figuras de plastico para Dungeons and dragons.', 450, "https://images-na.ssl-images-amazon.com/images/I/71Ara443Y6L._AC_SL1500_.jpg"),
    new Product(5, 'Players Handbook', 'Manual del jugador para Dungeons and Dragons', 650, "https://images-na.ssl-images-amazon.com/images/I/81pViXqeVLL.jpg"),
    new Product(6, 'Monster Manual', 'Manual de monstruos para jugar Dungeons and Dragons', 700, "https://images-na.ssl-images-amazon.com/images/I/817Cu0F09WL._AC_SX425_.jpg"),
    new Product(7, 'Dungeon Master Manual', 'Manual del Maestro del Calabozo para jugar Dungeons and Dragons', 700, 'https://online.anyflip.com/ofsj/axvy/files/mobile/1.jpg'),
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
}
