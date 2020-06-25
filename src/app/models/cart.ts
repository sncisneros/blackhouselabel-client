import { Item } from './item';

export interface Cart{

    items: Item[];
    itemQty: number;
    totalPrice: number;

}