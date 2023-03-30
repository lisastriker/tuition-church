import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteeComponent } from './tutee.component';

describe('TuteeComponent', () => {
  let component: TuteeComponent;
  let fixture: ComponentFixture<TuteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
