import { TazzOrder } from './tazz-order';
import { TazzOrderClient } from './tazz-order-client';
import{TazzOrderProduct} from './tazz-order-product';

export class TazzApiOrder {
    order: TazzOrder;
    client: TazzOrderClient;
    products: TazzOrderProduct[];
    constructor(order: TazzOrder, client: TazzOrderClient, products: TazzOrderProduct[]) {
        this.order = order;
        this.client = client;
        this.products = products;
    }
}
