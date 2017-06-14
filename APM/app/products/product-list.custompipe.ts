import {Pipe,PipeTransform} from "@angular/core"
import {IProduct}from "./Iproduct"

@Pipe({
    name:"ProductFilterPipe"
})

export class ProductFilterPipe implements PipeTransform
{
    transform(productlist: IProduct[] , filterstring: string): IProduct[]
    {
        return filterstring? 
        productlist.filter(
            (product: IProduct)=>product.productName.toLocaleLowerCase().includes(filterstring.toLocaleLowerCase()))
            :productlist;
    }
}