import { HttpInterceptor,  HttpRequest,  HttpHandler,  HttpEvent,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

// HTTPInterceptor -> Outil qui permet de traiter les requêtes et les réponses HTTP avant qu'elles ne soient envoyées ou reçues par le serveur.
@Injectable() 
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService : AuthService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loggedInUserToken = this.authService.getTokenFromLocalStorage();

        if (loggedInUserToken) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${loggedInUserToken}` },
            });
        } else if (this.authService.isTokenExpired()) {
            this.router.navigate(['/logout']);
        } else {
            this.router.navigate(['/login']);
        }

        return next.handle(req); 
    }  
 
}

