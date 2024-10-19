export type ProductProps = {
    imageURL:string;
    nama:string;
    warna?:string;
    harga:number
}

export type Products = {
    data: ProductProps[]
}