import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapreproductComponent } from './comapreproduct.component';

describe('ComapreproductComponent', () => {
  let component: ComapreproductComponent;
  let fixture: ComponentFixture<ComapreproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComapreproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapreproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
