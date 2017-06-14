import {Component, OnInit} from "@angular/core";
import {IProduct} from "./Iproduct";
import {ProductService}from "./product.service"
@Component({
    moduleId: module.id, 
    templateUrl:"product-list.component.html",
    styleUrls: ["product.component.css"]
})
export class ProductListComponent implements OnInit
{
    showImage: boolean=true;
    imageWidth: number=50;
    imageMargin: number=2;
    pageTitle: string="Product List";
    filteringLable: string="Filtered by:";
    filterString: string="";
    errorMessage: string="";
    private _productservice: ProductService;
    products: IProduct[]=null;
    constructor (productservice:ProductService)
    {
        this._productservice=productservice;
    }
    HideImage():void
    {
        this.showImage=!this.showImage; 
    }
    onNotify(message: number)
    {
       var UpdatedProducts = this.products.find((product:IProduct)=>product.starRating==message);
       var rating=UpdatedProducts.starRating;
       UpdatedProducts.starRating=rating>=5?5:Number((rating+0.1).toPrecision(2));   
    }
    ngOnInit():void
    {
        this._productservice.getProducts().subscribe(products=>this.products=products,
                                                    error=> this.errorMessage=<any>error);   
    }
}