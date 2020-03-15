import { Product } from 'src/app/models/product';
export class ShoppingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;
    // constructor(public product: Product, public quantity: number) { }

    get totalPrice() {
        return this.price * this.quantity;
    }

}