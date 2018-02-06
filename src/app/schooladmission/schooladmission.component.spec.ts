import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdmissionComponent } from './schooladmission.component';

describe('SchooladmissionComponent', () => {
  let component: SchoolAdmissionComponent;
  let fixture: ComponentFixture<SchoolAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
