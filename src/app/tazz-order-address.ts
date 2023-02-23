export class TazzOrderAddress {
    lat: string;
    lon: string;

    address: string;
    building: string;
    entrance: string;
    apartment: string;
    level: string;

    city: string;
    details: string;
    full_address: string;
    constructor(
        lat: string,
        lon: string,
        address: string,
        building: string,
        entrance: string,
        apartment: string,
        level: string,
        city: string,
        details: string,
        full_address: string
    ) {
        this.lat = lat;
        this.lon = lon;
        this.address = address;
        this.building = building;
        this.entrance = entrance;
        this.apartment = apartment;
        this.level = level;
        this.city = city;
        this.details = details;
        this.full_address = full_address;
    }
}
