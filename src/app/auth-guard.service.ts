import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { RegisterService } from './auth.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router, private authService: RegisterService ) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
 
        if (!this.authService.isUserLoggedIn() && (route.routeConfig.path != "login" && route.routeConfig.path != ""  )) {
            console.log(route.routeConfig.path);
            alert('You are not allowed to view this page. You are redirected to login Page');
           
            this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
            return false;
 
            //var urlTree = this.router.createUrlTree(['login']);
            //return urlTree;
        } 
        if (this.authService.isUserLoggedIn() && (route.routeConfig.path === "login" ||route.routeConfig.path === ""  )) {
            
            console.log(this.authService.isUserLoggedIn());
            this.router.navigate(["home/productList"]);
            return false;
 
        }
 
        return true;
    }
 
}