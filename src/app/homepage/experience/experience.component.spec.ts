import { ComponentFixture, TestBed } from '@angular/core/testing';

import { experienceComponent } from './experience.component';

describe('experienceComponent', () => {
  let component: experienceComponent;
  let fixture: ComponentFixture<experienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [experienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(experienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
