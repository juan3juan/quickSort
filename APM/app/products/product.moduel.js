"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var share_moduel_1 = require("../shared/share.moduel");
var product_detail_component_1 = require("./product-detail.component");
var product_list_component_1 = require("./product-list.component");
var product_list_custompipe_1 = require("./product-list.custompipe");
var product_service_1 = require("./product.service");
var product_detail_guard_service_1 = require("./product-detail.guard.service");
var ProductModuel = (function () {
    function ProductModuel() {
    }
    return ProductModuel;
}());
ProductModuel = __decorate([
    core_1.NgModule({
        imports: [
            share_moduel_1.ShareModuel,
            router_1.RouterModule.forChild([
                { path: "products", component: product_list_component_1.ProductListComponent },
                { path: "product/:id", canActivate: [product_detail_guard_service_1.ProductDetailGuard], component: product_detail_component_1.ProductDetailComponent }
            ])
        ],
        declarations: [product_list_component_1.ProductListComponent, product_detail_component_1.ProductDetailComponent, product_list_custompipe_1.ProductFilterPipe],
        providers: [product_service_1.ProductService, product_detail_guard_service_1.ProductDetailGuard]
    })
], ProductModuel);
exports.ProductModuel = ProductModuel;
//# sourceMappingURL=product.moduel.js.map