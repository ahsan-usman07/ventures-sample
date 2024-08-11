import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsNewComponent } from './why-us-new.component';

describe('WhyUsNewComponent', () => {
  let component: WhyUsNewComponent;
  let fixture: ComponentFixture<WhyUsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUsNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyUsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
