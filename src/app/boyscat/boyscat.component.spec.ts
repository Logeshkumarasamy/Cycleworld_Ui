import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyscatComponent } from './boyscat.component';

describe('BoyscatComponent', () => {
  let component: BoyscatComponent;
  let fixture: ComponentFixture<BoyscatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoyscatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
