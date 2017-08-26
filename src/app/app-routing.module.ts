import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BuyersComponent } from './components/buyers/buyers.component';
import { BuyerDetailsComponent } from './components/buyers/buyer-details/buyer-details.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
  {
     path: '',
     redirectTo: '/buyers',
     pathMatch: 'full'
  },

  { path: 'buyers', 
    component: BuyersComponent,

    children: [
    	{
    		path: ':id',
    		component: BuyerDetailsComponent
    	}
    ]

  },
  {
    path: 'products',
    component: ProductsComponent,
  }
];

@NgModule({
  imports: [
  	RouterModule.forRoot(
      appRoutes
      ),
    CommonModule
  ],

  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
