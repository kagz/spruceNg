import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanylocComponent } from './companyloc.component';

describe('CompanylocComponent', () => {
  let component: CompanylocComponent;
  let fixture: ComponentFixture<CompanylocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanylocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanylocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
