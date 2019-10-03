import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStudentPage } from './data-student.page';

describe('DataStudentPage', () => {
  let component: DataStudentPage;
  let fixture: ComponentFixture<DataStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
