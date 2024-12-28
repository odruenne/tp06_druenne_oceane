import { HttpInterceptor,  HttpRequest,  HttpHandler,  HttpEvent,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AccountService } from './services/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable() 
export class JwtInterceptor implements HttpInterceptor {

    constructor(private accountService : AccountService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercept");
        let loggedInUserToken = this.accountService.getTokenFromLocalStorage();
        console.log("decoded / local storage", loggedInUserToken, localStorage.getItem('access_token'));

        if (loggedInUserToken) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${loggedInUserToken}` },
            });
        } else {
            console.log("redirect to login");
            this.router.navigate(['/login']);
        }

        return next.handle(req); 
    }  
 
}

