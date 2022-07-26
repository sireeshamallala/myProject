import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class ApiUrls{
  // mainUrl = 'http://192.168.29.146:9090/';
  mainUrl = 'http://192.168.29.19:8080/';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': ' application/json',
    })
  }
  addStudent = 'api/v1/student/addStudent';
  findall = 'api/v1/student/findall';

  addProduct = 'product/addProduct';
  products = 'product/products';
}
