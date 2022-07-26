import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsDataComponent } from './main/students-data/students-data.component';
import { AddEditStudentDataComponent } from './main/students-data/add-edit-student-data/add-edit-student-data.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './main/product-list/product-list.component';
import { AddEditProductComponent } from './main/product-list/add-edit-product/add-edit-product.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StudentsDataComponent,
    AddEditStudentDataComponent,
    ProductListComponent,
    AddEditProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
