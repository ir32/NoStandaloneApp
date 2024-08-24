import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'about/:userId', component: AboutComponent }, // Route with userId parameter for AboutComponent
  { path: 'contact', component: ContactComponent }, // Route for ContactComponent
  { path: 'cart', component: CartComponent }, // Route for CartComponent
  { path: '', component: ProductTableComponent }, // Default route for ProductTableComponent
  { path: '**', redirectTo: '' } // Redirect unknown routes to the default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configures the router at the app's root level
  exports: [RouterModule] // Makes RouterModule available throughout the app
})
export class AppRoutingModule { }
