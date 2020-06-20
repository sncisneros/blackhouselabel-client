import { Item } from './item';

export interface Cart{

    items: Item[];
    itemQty: Number;
    totalPrice: Number;

}