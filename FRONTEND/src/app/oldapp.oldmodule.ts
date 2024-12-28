import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

// export function tokenGetter() {
//   return localStorage.getItem('access_token');
// }

// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     HttpClient,
//     JwtModule.forRoot({
//       config: {
//         tokenGetter: tokenGetter,
//         allowedDomains: ['localhost:3000'], 
//       },
//     }),
//   ],
//   providers: [
//     JwtHelperService,
//     { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
