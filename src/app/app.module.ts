import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { APP_ROUTE } from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
