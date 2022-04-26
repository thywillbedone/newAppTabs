import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Products List as title', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-title');
    expect(el.textContent).toEqual('Products List');
  });

  it('should have an array of 3 products', () => {
    expect(component.products).toHaveSize(3);
  });

  it('should have a card header with the name of the product', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-card-header');
    expect(el.textContent).toEqual('Opna Women\'s Short Sleeve Moisture');
  });

  it('should have a card content with the description of the product', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-card-content');
    expect(el.textContent).toContain('cationic polyester interlock');
  });

});
