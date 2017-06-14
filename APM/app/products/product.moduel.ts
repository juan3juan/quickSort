import {NgModule} from "@angular/core"
import {RouterModule} from "@angular/router"

import {ShareModuel} from "../shared/share.moduel"

import {ProductDetailComponent} from "./product-detail.component"
import {ProductListComponent} from "./product-list.component"
import {ProductFilterPipe} from "./product-list.custompipe"
import {ProductService} from "./product.service"
import {ProductDetailGuard} from"./product-detail.guard.service"
@NgModule(
    {
        imports:
        [
            ShareModuel,
            RouterModule.forChild
            (
                [   
                    {path:"products", component: ProductListComponent},
                    {path:"product/:id", canActivate:[ProductDetailGuard], component:ProductDetailComponent}
                ]
            )
        ],
        declarations:[ProductListComponent, ProductDetailComponent, ProductFilterPipe],
        providers:[ProductService, ProductDetailGuard]
    }
)
export class ProductModuel{}