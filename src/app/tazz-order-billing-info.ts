export class TazzOrderBillingInfo {
    billing_company: string;
    billing_address: string;
    billing_cui: string;
    billing_reg_com: string;
    billing_bank: string;
    billing_iban: string;
    constructor(
        billing_company: string,
        billing_address: string,
        billing_cui: string,
        billing_reg_com: string,
        billing_bank: string,
        billing_iban: string
    ) {
        this.billing_company = billing_company;
        this.billing_address = billing_address;
        this.billing_cui = billing_cui;
        this.billing_reg_com = billing_reg_com;
        this.billing_bank = billing_bank;
        this.billing_iban = billing_iban;
    }
}
