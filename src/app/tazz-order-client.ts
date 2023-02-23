export class TazzOrderClient {
    name: string;
    email: string;
    phone: string;
    total_orders: string;
    returns: string;
    constructor(
        name: string,
        email: string,
        phone: string,
        total_orders: string,
        returns: string
    ) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.total_orders = total_orders;
        this.returns = returns;
    }
}
