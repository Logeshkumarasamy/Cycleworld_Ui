import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomancatComponent } from './womancat.component';

describe('WomancatComponent', () => {
  let component: WomancatComponent;
  let fixture: ComponentFixture<WomancatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomancatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomancatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
