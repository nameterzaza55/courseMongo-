import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { student } from 'src/Models/Student';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.page.html',
  styleUrls: ['./data-edit.page.scss'],
})
export class DataEditPage implements OnInit {

  dataStudent: FormGroup;
  mdSt :student;
  submit : boolean = false;
  editData:any;

  constructor(public activate:ActivatedRoute ,public studentApi:StudentService ,public formbuilder:FormBuilder ,public route:Router) {
    this.editData = this.activate.snapshot.paramMap.get('_id');
    console.log(this.editData);

    this.dataStudent = this.formbuilder.group({
      'idStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'subjectStudent': [null, Validators.required],
      'scoreStudent': [null, Validators.required],
      'dateStudent': [null, Validators.required]
    });

    this.studentApi.getDataStudentById(this.editData).subscribe(it =>{
      console.log(it);   
      this.dataStudent.patchValue(it)
      console.log(this.dataStudent.value);
    });

   
  }

  ngOnInit() {
  }

  log(){
    console.log(this.dataStudent.value);
    this.mdSt = this.dataStudent.value;
    console.log(this.mdSt);
    
    this.studentApi.editDataStudent(this.editData,this.mdSt).subscribe(it =>{
      console.log(it);

      this.route.navigate(['/data-list']);
      
    });
    
  }
}
