import {Component, OnInit} from "@angular/core"
import {ActivatedRoute, Router} from "@angular/router"
import {IProduct} from "./Iproduct"
import {ProductService} from "./product.service"

@Component(
    {
        moduleId: module.id,
        styleUrls: ["product.component.css"],
        templateUrl: "product-detail.component.html"
    }
)
export class ProductDetailComponent implements OnInit
{
    private _activerouter:ActivatedRoute;
    private _productservice:ProductService;
    private _router:Router;
    private _products:IProduct[]=null;
    pageTitle: string="Product Detail";
    product: IProduct;
    constructor(activerouter:ActivatedRoute, productservice:ProductService, router:Router)
    {
        this._activerouter=activerouter;
        this._productservice=productservice;
        this._router=router;
    }
    onNotify(message: number)
    {
       let rating=this.product.starRating;
       this.product.starRating=rating>=5?5:Number((rating+0.1).toPrecision(2));   
    }
    ngOnInit()
    {
        let id=this._activerouter.snapshot.params["id"];
        this.pageTitle+=" "+id;
        this.getProductbyId(id);
    }
    onBack():void
    {
        this._router.navigate(['/products']);
    }
    getProductbyId(id: number):void
    {
        this._productservice.getProducts()
        .subscribe(products=>this.product=products.find(_product=>_product.productId==id));
    }
}