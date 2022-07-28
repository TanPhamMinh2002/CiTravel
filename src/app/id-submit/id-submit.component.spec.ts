import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdSubmitComponent } from './id-submit.component';

describe('IdSubmitComponent', () => {
  let component: IdSubmitComponent;
  let fixture: ComponentFixture<IdSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
