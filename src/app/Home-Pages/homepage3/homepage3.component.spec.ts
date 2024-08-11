import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage3Component } from './homepage3.component';

describe('Homepage3Component', () => {
  let component: Homepage3Component;
  let fixture: ComponentFixture<Homepage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Homepage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
