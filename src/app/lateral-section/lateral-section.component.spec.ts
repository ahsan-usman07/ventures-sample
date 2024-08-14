import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralSectionComponent } from './lateral-section.component';

describe('LateralSectionComponent', () => {
  let component: LateralSectionComponent;
  let fixture: ComponentFixture<LateralSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LateralSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
