import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeteilsComponent } from './product-deteils.component';

describe('ProductDeteilsComponent', () => {
  let component: ProductDeteilsComponent;
  let fixture: ComponentFixture<ProductDeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeteilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
