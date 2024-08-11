import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMarqueeEffectComponent } from './new-marquee-effect.component';

describe('NewMarqueeEffectComponent', () => {
  let component: NewMarqueeEffectComponent;
  let fixture: ComponentFixture<NewMarqueeEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMarqueeEffectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMarqueeEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
