export interface Order {
    id : number;
    createdAt : string;
    address : string;
    receiver : string;
    phone : string;
    bookTitle : string;
    totalQuantity : number;
    totalPrice : number;
}