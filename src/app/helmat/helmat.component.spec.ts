import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmatComponent } from './helmat.component';

describe('HelmatComponent', () => {
  let component: HelmatComponent;
  let fixture: ComponentFixture<HelmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelmatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
