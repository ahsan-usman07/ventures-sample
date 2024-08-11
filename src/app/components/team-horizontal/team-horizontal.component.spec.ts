import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHorizontalComponent } from './team-horizontal.component';

describe('TeamHorizontalComponent', () => {
  let component: TeamHorizontalComponent;
  let fixture: ComponentFixture<TeamHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamHorizontalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
