import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2'; // conectar firebase
import { AngularFireDatabaseModule } from 'angularfire2/database'; //para base de datos
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'; //Para autentificacion 
import { environment } from '../environments/environment';

// components
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

// services
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // conectar firebase
    AngularFireDatabaseModule, //para base de datos
    AngularFireAuthModule, //Para autentificacion
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
