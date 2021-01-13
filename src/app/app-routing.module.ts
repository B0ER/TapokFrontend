
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart/cart-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { RegistrationPageComponent } from './pages/registration/registration-page.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'products',
		pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
	{
		path: 'products',
		component: ProductsPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
		path: '**',
		redirectTo: ''
	}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
