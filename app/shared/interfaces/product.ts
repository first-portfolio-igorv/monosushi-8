export interface ProductRequest {
    name:string,
    components:string,
    path:string,
    category:string,
    price:string,
    weight:string,
    img:string
}
export interface ProductResponse extends ProductRequest {
    id:number
}
