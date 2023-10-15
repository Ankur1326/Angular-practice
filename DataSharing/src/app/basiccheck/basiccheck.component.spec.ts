import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiccheckComponent } from './basiccheck.component';

describe('BasiccheckComponent', () => {
  let component: BasiccheckComponent;
  let fixture: ComponentFixture<BasiccheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasiccheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiccheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
