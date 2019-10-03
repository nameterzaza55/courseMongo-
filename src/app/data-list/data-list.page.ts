import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { student } from "src/Models/Student";

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.page.html',
  styleUrls: ['./data-list.page.scss'],
})
export class DataListPage implements OnInit {

  public dataStudentAll: student;
  constructor(public route:Router, public studentApi: StudentService, public router: Router, public navCrtl: NavController) { }

  ngOnInit() {
    this.studentApi.getStudentAll().subscribe((it) => {
      console.log(it);
      this.dataStudentAll = it;
      console.log(this.dataStudentAll);
    });
  }

  deleteStudent(idStudent) {
    console.log(idStudent);
    this.studentApi.deleteDataStudent(idStudent).subscribe(it => {
      this.studentApi.getStudentAll().subscribe(it => {
        console.log(it);
        this.dataStudentAll = it;
        console.log(this.dataStudentAll);
      });
    });
  }

  public editDataStudent(id) {
    this.route.navigate(['/data-edit', { _id: id }]);
  }


  public detailDataStudent(id) {
    this.route.navigate(['/data-student', { _id: id }]);
  }
}
