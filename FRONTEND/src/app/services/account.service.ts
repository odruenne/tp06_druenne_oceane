import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment'
import { LoginDTO } from '../models/LoginDTO';
import { Router } from '@angular/router';
import { UserDTO } from '../models/UserDTO';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private jwtService: JwtHelperService
  ) {}

  getLoginFromLoggedInUser(): string {
    const token = this.getTokenFromLocalStorage();
    
    if (token) {
      const decodedToken = this.jwtService.decodeToken(token);
      return decodedToken?.login || '';
    } else {
      return ''; 
    }
  }

  getTokenFromLoggedInUser() : string {
    const token = this.getTokenFromLocalStorage();
    
    if (token) {
      const decodedToken = this.jwtService.decodeToken(token);
      return decodedToken;
    } else {
      return '';
    }
  }

  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('access_token');// CREER CONSTANTE POUR access_token
  }

  public getDataFromUser(): Observable<UserDTO> {
    let login: string = this.getLoginFromLoggedInUser();
    const headers = { 'login': login };
    return this.httpClient.get<UserDTO>(`${environment.backendURL}/auth/profile`, { headers }).pipe(
      tap({
        error: (err) => {
          if (err.status === 401) {
            console.log("401");
            // Afficher message dans la page
            this.router.navigate(['/login']);
          }
        },
      })
    );
  }
}
