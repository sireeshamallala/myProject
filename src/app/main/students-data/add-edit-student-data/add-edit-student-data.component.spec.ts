import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudentDataComponent } from './add-edit-student-data.component';

describe('AddEditStudentDataComponent', () => {
  let component: AddEditStudentDataComponent;
  let fixture: ComponentFixture<AddEditStudentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStudentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
