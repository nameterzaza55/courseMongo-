import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { student } from "src/Models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public static host: string = "https://mongotestapi3mee.appspot.com/api/";

  constructor(public http: HttpClient) { }

  public getStudentAll() {
    return this.http.get<student>(StudentService.host + 'Student/GetStudentAll');
  }

  public addDataStudent(data: student) {
    // console.log(data);
    
    return this.http.post<student>(StudentService.host + 'Student/AddStudent', data);
  }

  public editDataStudent(Id: string, data) {
    return this.http.put<student>(StudentService.host + 'Student/EditStudent/' + Id, data);

  }

  public deleteDataStudent(Id:string) {
    return this.http.delete<student>(StudentService.host + 'Student/DeleteStudent/' + Id);

  }

  public getDataStudentById(Id:string) {
    return this.http.get<student>(StudentService.host + 'Student/GetStudentById/' + Id);

  }
}
