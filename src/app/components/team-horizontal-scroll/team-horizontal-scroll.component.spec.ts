import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHorizontalScrollComponent } from './team-horizontal-scroll.component';

describe('TeamHorizontalScrollComponent', () => {
  let component: TeamHorizontalScrollComponent;
  let fixture: ComponentFixture<TeamHorizontalScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamHorizontalScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamHorizontalScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
