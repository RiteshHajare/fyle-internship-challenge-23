import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalPageComponent } from './arrival-page.component';

describe('ArrivalPageComponent', () => {
  let component: ArrivalPageComponent;
  let fixture: ComponentFixture<ArrivalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
