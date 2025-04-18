import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReadComponent } from './read.component';

describe('ReadComponent', () => {
  let component: ProductReadComponent;
  let fixture: ComponentFixture<ProductReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductReadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
