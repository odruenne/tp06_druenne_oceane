import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EditCustomerAccountDataFormComponent } from './edit-customer-account-data-form/edit-customer-account-data-form.component';
import { LogoutComponent } from './logout/logout.component';
export const routes: Routes = [
    {path: 'login', component: LoginFormComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'profile', component: EditCustomerAccountDataFormComponent},
    {path: 'catalog', component: HomePageComponent},
    {path: 'app-shopping-cart', component: ShoppingCartComponent},
    {path: '**', component: LoginFormComponent}
];