export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/71CvoN8IClL._AC_SX425_.jpg' ) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
