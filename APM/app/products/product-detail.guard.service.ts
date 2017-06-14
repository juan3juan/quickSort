import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot ,CanActivate, Router} from "@angular/router";
@Injectable()
export class ProductDetailGuard implements CanActivate
{
    private _router:Router
    constructor(router:Router)
    {
        this._router=router;
    }
    canActivate(route:ActivatedRouteSnapshot):boolean
    {
        let id=+route.url[1].path;
        if (isNaN(id)||id<1)
        {
            alert("Invalid product Id");
            this._router.navigate(["/products"]);
            return false;
        }
        else
        {
            return true;
        }
    }
} 