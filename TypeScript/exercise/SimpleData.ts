import { Product } from "./Products";

export class SimpleData {
    private products : Array<Product>;

    constructor(){
        this.products = new Array<Product>(
        new Product(1,"Samsung Galaxy 7,","Telefon",5000),
        new Product(2,"Samsung Galaxy 6,","Telefon",3000),
        new Product(3,"Samsung Galaxy 8,","Telefon",7000),
        new Product(4,"Samsung Galaxy 5,","Telefon",2000)
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}

