import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListPage } from './data-list.page';

describe('DataListPage', () => {
  let component: DataListPage;
  let fixture: ComponentFixture<DataListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
