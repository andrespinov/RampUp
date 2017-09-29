import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SaleComponent } from './sale/sale.component';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaleComponent,
    ContactComponent,
    MenComponent,
    WomenComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'men', component: MenComponent},
      {path: 'women', component: WomenComponent},
      {path: 'sale', component: SaleComponent},
      {path: 'contact', component: ContactComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
