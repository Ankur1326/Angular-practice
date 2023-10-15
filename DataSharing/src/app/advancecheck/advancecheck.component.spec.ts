import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancecheckComponent } from './advancecheck.component';

describe('AdvancecheckComponent', () => {
  let component: AdvancecheckComponent;
  let fixture: ComponentFixture<AdvancecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancecheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
