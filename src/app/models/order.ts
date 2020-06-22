import {Cart} from './cart';
export class Order{
    _id : string;
    orderId: string;
    firstName : string;
    lastName : string;
    custEmail: string;
    custAddress: string;
    cart: Cart;
    status: any;
    totalPrice: number;
    trackingNum: string;

    constructor(){}
}