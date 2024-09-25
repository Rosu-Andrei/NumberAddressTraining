export interface Address {
    houseNumber: string;
    street: string;
    town: string;
    city: string;
    county: string;
    country: string;
}

export const initialAddress: Address = {
    houseNumber: '',
    street: '',
    town: '',
    city: '',
    county: '',
    country: ''
}