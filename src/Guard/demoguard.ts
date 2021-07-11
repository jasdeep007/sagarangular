import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree }
    from '@angular/router';
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class demoguard implements CanActivate {
    constructor(private route: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // authorization       
        // all conditions here
        return true;
    }

}