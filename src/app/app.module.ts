import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { AppRoutingModule } from './app-routing.module';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { Product } from '../../../domain/product';
// import { ProductService } from '../../../service/productservice';

// import { DataTableModule } from '../../node_modules/primeng';
import {TableModule} from 'primeng/table';
// import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ErrorcomponentComponent,
    // HttpClientModule
    // Product,
    // ProductService
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
