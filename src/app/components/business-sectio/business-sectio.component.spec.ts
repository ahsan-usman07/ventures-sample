import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSectioComponent } from './business-sectio.component';

describe('BusinessSectioComponent', () => {
  let component: BusinessSectioComponent;
  let fixture: ComponentFixture<BusinessSectioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSectioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessSectioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
