import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollCardsComponent } from './horizontal-scroll-cards.component';

describe('HorizontalScrollCardsComponent', () => {
  let component: HorizontalScrollCardsComponent;
  let fixture: ComponentFixture<HorizontalScrollCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalScrollCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalScrollCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
