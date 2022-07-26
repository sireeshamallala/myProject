import { Component, OnInit } from '@angular/core';
import {ApiUrls} from "../../../schemas/apiUrls";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-edit-student-data',
  templateUrl: './add-edit-student-data.component.html',
  styleUrls: ['./add-edit-student-data.component.css']
})
export class AddEditStudentDataComponent implements OnInit {
  studentObject: any = {

  }

  constructor(private _apiUrls: ApiUrls, private _http: HttpClient) { }

  ngOnInit(): void {
  }

  // addStudent(){
  //   this._http.post(this._apiUrls.mainUrl+ this._apiUrls.addStudent, this.studentObject).subscribe((res: any) => {
  //     if (res){}
  //   });
  // }
}
