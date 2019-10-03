import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { student } from 'src/Models/Student';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-data-student',
  templateUrl: './data-student.page.html',
  styleUrls: ['./data-student.page.scss'],
})
export class DataStudentPage implements OnInit {

  student :student;
  Data:any;

  aa:any;
  constructor(public activate: ActivatedRoute, public router: Router, public studentApi: StudentService) {
    this.Data = this.activate.snapshot.paramMap.get('_id');
    console.log(this.Data);

    this.studentApi.getDataStudentById(this.Data).subscribe(it =>{
      console.log(it);
      this.student = it;
      console.log(this.student);
    });
   }

  ngOnInit() {
  }

}
