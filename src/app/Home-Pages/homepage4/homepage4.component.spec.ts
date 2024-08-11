import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage4Component } from './homepage4.component';

describe('Homepage4Component', () => {
  let component: Homepage4Component;
  let fixture: ComponentFixture<Homepage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Homepage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
