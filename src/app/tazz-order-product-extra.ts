export class TazzOrderProductExtra {
    id: string;
    extra_id: string;
    name: string;
    price: number;
    constructor(
        id: string,
        extra_id: string,
        name: string,
        price: number
    ) {
        this.id = id;
        this.extra_id = extra_id;
        this.name = name
        this.price = price
    }
}
