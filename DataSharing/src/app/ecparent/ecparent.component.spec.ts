import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcparentComponent } from './ecparent.component';

describe('EcparentComponent', () => {
  let component: EcparentComponent;
  let fixture: ComponentFixture<EcparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
