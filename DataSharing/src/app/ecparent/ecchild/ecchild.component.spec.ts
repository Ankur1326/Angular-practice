import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcchildComponent } from './ecchild.component';

describe('EcchildComponent', () => {
  let component: EcchildComponent;
  let fixture: ComponentFixture<EcchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
