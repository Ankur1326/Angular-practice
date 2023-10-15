import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalcheckComponent } from './finalcheck.component';

describe('FinalcheckComponent', () => {
  let component: FinalcheckComponent;
  let fixture: ComponentFixture<FinalcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
