import { Component, OnInit } from '@angular/core';
import {ApiUrls} from "../../../schemas/apiUrls";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  public productObject : any = {

  }

  constructor(private _apiUrls: ApiUrls, private _http: HttpClient) { }

  ngOnInit(): void {

  }

  saveProduct() {
      this._http.post(this._apiUrls.mainUrl+ this._apiUrls.addProduct, this.productObject, {}).subscribe((res: any) => {
        if (res){

        }
      });
  }
}
