import {Cart} from './cart';
export class Order{
    _id : string;
    orderId: string;
    firstName : string;
    lastName : string;
    custEmail: string;
    custAddress: {
        address: string;
        city: string;
        state: string;
        zip: number;
    };
    cart: Cart;
    status: any;
    totalPrice: number;
    trackingNum: string;

    constructor(){}
}