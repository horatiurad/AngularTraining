import {TazzOrderProductCategory} from './tazz-order-product-category';
import {TazzOrderProductExtraCategory} from './tazz-order-product-extra-category';
export class TazzOrderProduct {
    id: string;
    ecm_id: string;
    title: string;
    image: string;
    details: string;
    old_price: number;
    price: number;
    qty: number;
    total: number;

    categories: TazzOrderProductCategory[];
    extras: TazzOrderProductExtraCategory[];
    constructor(
        id: string,
        ecm_id: string,
        title: string,
        image: string,
        details: string,
        old_price: number,
        price: number,
        qty: number,
        total: number,
        categories: TazzOrderProductCategory[],
        extras: TazzOrderProductExtraCategory[]
    ) {
        this.id = id
        this.ecm_id = ecm_id
        this.title = title
        this.image = image
        this.details = details
        this.old_price = old_price
        this.price = price
        this.qty = qty
        this.total = total
        this.categories = categories
        this.extras = extras
    }
}
