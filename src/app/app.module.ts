import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { CartComponent } from './cart/cart.component';
import { CcameosComponent } from './ccameos/ccameos.component';
import { ContactComponent } from './contact/contact.component';
import { DressDetailsComponent } from './dress-details/dress-details.component';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './new/new.component';
import { PpolicyComponent } from './ppolicy/ppolicy.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopsComponent } from './tops/tops.component';
import { ReturnsComponent } from './returns/returns.component';
import { TandcComponent } from './tandc/tandc.component';
import { ShipComponent } from './ship/ship.component';
import { ShippingComponent } from './shipping/shipping.component';
import { DressesComponent } from './dresses/dresses.component';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'dress/:dressId', component: DressDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'tops', component: TopsComponent },
      { path: 'ppolicy', component: PpolicyComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'returns', component: ReturnsComponent },
      { path: 'tandc', component: TandcComponent },
      { path: 'ship', component: ShipComponent },
      { path: 'new', component: NewComponent },
      { path: 'bottoms', component: BottomsComponent },
      { path: 'ccameos', component: CcameosComponent },
      { path: 'dresses', component: DressesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    BottomsComponent,
    CartComponent,
    CcameosComponent,
    ContactComponent,
    DressDetailsComponent,
    AboutComponent,
    NewComponent,
    PpolicyComponent,
    ProductDetailsComponent,
    TopsComponent,
    ReturnsComponent,
    TandcComponent,
    ShipComponent,
    ShippingComponent,
    DressesComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/