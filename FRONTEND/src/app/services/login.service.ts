import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment'
import { LoginDTO } from '../models/LoginDTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
 
    constructor(private httpClient: HttpClient, private router: Router) { }

    public login(loginDTO: LoginDTO) : Observable<string> {
        return this.httpClient.post(
            environment.backendURL + "/auth/login", 
            loginDTO,
            {responseType: 'text'}
        )
        .pipe(
            tap((res) => localStorage.setItem("access_token", res))
        );
    }

    public logout() : void {  
        localStorage.removeItem('access_token');  
    }

    // gérer les 401 aussi
}