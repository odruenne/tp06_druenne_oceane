import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomePageComponent } from './home-page/home-page.component';
export const routes: Routes = [
    {path: 'catalog', component: HomePageComponent},
    {path: 'app-shopping-cart', component: ShoppingCartComponent},
    {path: '**', component: HomePageComponent},
];