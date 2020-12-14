import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedgetComponent } from './feedget.component';

describe('FeedgetComponent', () => {
  let component: FeedgetComponent;
  let fixture: ComponentFixture<FeedgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
