"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(activerouter, productservice, router) {
        this._products = null;
        this.pageTitle = "Product Detail";
        this._activerouter = activerouter;
        this._productservice = productservice;
        this._router = router;
    }
    ProductDetailComponent.prototype.onNotify = function (message) {
        var rating = this.product.starRating;
        this.product.starRating = rating >= 5 ? 5 : Number((rating + 0.1).toPrecision(2));
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        var id = this._activerouter.snapshot.params["id"];
        this.pageTitle += " " + id;
        this.getProductbyId(id);
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.getProductbyId = function (id) {
        var _this = this;
        this._productservice.getProducts()
            .subscribe(function (products) { return _this.product = products.find(function (_product) { return _product.productId == id; }); });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ["product.component.css"],
        templateUrl: "product-detail.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService, router_1.Router])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map