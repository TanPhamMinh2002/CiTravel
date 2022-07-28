import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalTimeComponent } from './arrival-time.component';

describe('ArrivalTimeComponent', () => {
  let component: ArrivalTimeComponent;
  let fixture: ComponentFixture<ArrivalTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivalTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
