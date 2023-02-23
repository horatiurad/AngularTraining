import { TazzOrderProductExtra } from './tazz-order-product-extra';

export class TazzOrderProductExtraCategory {
    id: string;
    category_id: string;
    name: string;
    type: string;
    min: number;
    max: number;
    extras: TazzOrderProductExtra[];
    constructor(
        id: string,
        category_id: string,
        name: string,
        type: string,
        min: number,
        max: number,
        extras: TazzOrderProductExtra[]
    ) {
        this.id = id
        this.category_id = category_id
        this.name = name
        this.type = type
        this.min = min
        this.max = max
        this.extras = extras
    }
}
