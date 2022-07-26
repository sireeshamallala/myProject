import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEditStudentDataComponent} from "./main/students-data/add-edit-student-data/add-edit-student-data.component";
import {StudentsDataComponent} from "./main/students-data/students-data.component";
import {AppComponent} from "./app.component";
import {ProductListComponent} from "./main/product-list/product-list.component";
import {AddEditProductComponent} from "./main/product-list/add-edit-product/add-edit-product.component";

const routes: Routes = [
  {
    path: 'addStudent', component:AddEditStudentDataComponent
  },
  {
    path: 'AllStudent', component:StudentsDataComponent
  },
  {
    path: 'appData', component:AppComponent
  },
  {
    path: 'allProducts', component:ProductListComponent
  },
  {
    path: 'allProducts/addProduct', component:AddEditProductComponent
  },
  {
    path:'**', redirectTo: 'appData'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
