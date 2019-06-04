import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DWApplicationsComponent } from './dwapplications.component';

describe('DWApplicationsComponent', () => {
  let component: DWApplicationsComponent;
  let fixture: ComponentFixture<DWApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DWApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DWApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
