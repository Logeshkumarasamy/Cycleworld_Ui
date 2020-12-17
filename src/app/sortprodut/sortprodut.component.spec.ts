import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortprodutComponent } from './sortprodut.component';

describe('SortprodutComponent', () => {
  let component: SortprodutComponent;
  let fixture: ComponentFixture<SortprodutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortprodutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortprodutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
