import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTE = RouterModule.forRoot(APP_ROUTES);