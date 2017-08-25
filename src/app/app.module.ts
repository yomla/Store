import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { BuyersService } from './shared/services/buyers.service';
 

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponent,
    ProductsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule    
  ],

  providers: [BuyersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
