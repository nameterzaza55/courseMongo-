import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/Models/Student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-data-add',
  templateUrl: './data-add.page.html',
  styleUrls: ['./data-add.page.scss'],
})
export class DataAddPage implements OnInit {

  dataStudent: FormGroup;
  submit: boolean = false;
  mdSt: student;

  constructor(public activate: ActivatedRoute, public studentApi: StudentService, public formbuilder: FormBuilder, public route: Router) {
    this.dataStudent = this.formbuilder.group({
      'idStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'subjectStudent': [null, Validators.required],
      'scoreStudent': [null, Validators.required],
      'dateStudent': [null, Validators.required]

    });
  }

  ngOnInit() {
  }

  get f() { return this.dataStudent.controls; }

  async log() {
    this.submit = true;
    console.log(this.dataStudent.value);
    console.log(this.dataStudent);
    this.mdSt = this.dataStudent.value;
    this.studentApi.addDataStudent(this.mdSt).subscribe(it => {
      console.log(it);
    });



  }
}
