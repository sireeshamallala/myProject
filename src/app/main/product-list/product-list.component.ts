import { Component, OnInit } from '@angular/core';
import {ApiUrls} from "../../schemas/apiUrls";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _apiUrls: ApiUrls, private _http: HttpClient) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._http.get(this._apiUrls.mainUrl+ this._apiUrls.products,this._apiUrls.httpOptions).subscribe((res: any) => {
      if (res){

      }
    });
  }
}
