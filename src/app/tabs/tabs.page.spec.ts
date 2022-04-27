import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 tab buttons', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelectorAll('ion-tab-button');
    expect(el).toHaveSize(3);
  });

  it('should have a clients alike icon', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('#clients');
    expect(el.getAttribute('name')).toEqual('people-outline');
  });

  it('should have a reservations alike icon', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('#reservations');
    expect(el.getAttribute('name')).toEqual('bag-check-outline');
  });

  it('should have a products alike icon', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('#products');
    expect(el.getAttribute('name')).toEqual('cart-outline');
  });
});
