import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFadeCardsComponent } from './left-fade-cards.component';

describe('LeftFadeCardsComponent', () => {
  let component: LeftFadeCardsComponent;
  let fixture: ComponentFixture<LeftFadeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftFadeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftFadeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
