import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuePropsComponent } from './value-props.component';

describe('ValuePropsComponent', () => {
  let component: ValuePropsComponent;
  let fixture: ComponentFixture<ValuePropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuePropsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValuePropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
