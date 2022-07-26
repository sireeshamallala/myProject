import { Component, OnInit } from '@angular/core';
import {ApiUrls} from "../../schemas/apiUrls";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students-data',
  templateUrl: './students-data.component.html',
  styleUrls: ['./students-data.component.css']
})
export class StudentsDataComponent implements OnInit {

  constructor(private _apiUrls: ApiUrls, private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    // this.AllStudent();
  }

  // AllStudent(){
  //   this._http.get(this._apiUrls.mainUrl+ this._apiUrls.addStudent).subscribe((res: any) => {
  //     if (res){}
  //   });
  // }

  addStudent(){
    this._router.navigate(['addStudent'])
  }

}
