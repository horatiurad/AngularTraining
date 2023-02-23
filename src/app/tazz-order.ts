import { TazzOrderAddress } from './tazz-order-address';
import { TazzOrderBillingInfo } from './tazz-order-billing-info';

export class TazzOrder {
    id: string;
    order_time: string;
    delivery_time: string;
    delivery: string;
    shipping_courier_phone: string;
    shipping_order_code: string;
    shipping_pickup_time: string;
    details: string;
    payment: string;
    meal_ticket_provider: string;
    meal_ticket_amount: string;
    partner_own_delivery: boolean;
    partner_api_key: string;
    cutlery: boolean;
    voucher_code: string;
    voucher_type: string;
    voucher_value: number;
    shipping: number;
    packing: number;
    subtotal: number;
    discount: number;
    partner_discount: number;
    ecm_discount: number;
    total: number;

    billing: TazzOrderBillingInfo;
    address: TazzOrderAddress;
    constructor(
        id: string,
        order_time: string ,
        delivery_time: string,
        delivery: string,
        shipping_courier_phone: string,
        shipping_order_code: string,
        shipping_pickup_time: string,
        details: string,
        payment: string,
        meal_ticket_provider: string,
        meal_ticket_amount: string,
        partner_own_delivery: boolean,
        partner_api_key: string,
        cutlery: boolean,
        voucher_code: string,
        voucher_type: string,
        voucher_value: number,
        shipping: number,
        packing: number,
        subtotal: number,
        discount: number,
        partner_discount: number,
        ecm_discount: number,
        total: number,
        billing: TazzOrderBillingInfo,
        address: TazzOrderAddress
    ) {
        this.id = id;
        this.order_time = order_time;
        this.delivery_time = delivery_time;
        this.delivery = delivery;
        this.shipping_courier_phone = shipping_courier_phone;
        this.shipping_order_code = shipping_order_code;
        this.shipping_pickup_time = shipping_pickup_time;
        this.details = details;
        this.payment = payment;
        this.meal_ticket_provider = meal_ticket_provider;
        this.meal_ticket_amount = meal_ticket_amount;
        this.partner_own_delivery = partner_own_delivery;
        this.partner_api_key = partner_api_key;
        this.cutlery = cutlery;
        this.voucher_code = voucher_code;
        this.voucher_type = voucher_type;
        this.voucher_value = voucher_value;
        this.shipping = shipping;
        this.packing = packing;
        this.subtotal = subtotal;
        this.discount = discount;
        this.partner_discount = partner_discount;
        this.ecm_discount = ecm_discount;
        this.total = total;
        this.billing = billing;
        this.address = address;
    }
}
