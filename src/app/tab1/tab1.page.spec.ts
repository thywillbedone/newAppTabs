import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [
        IonicModule.forRoot(),
        ExploreContainerComponentModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Clients as title', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-title');
    expect(el.textContent.trim()).toEqual('Clients');
  });

  it('should have a Clients button', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('#page-btn');
    expect(el.textContent.trim()).toEqual('Clients');
  });

  it('should load the Clients button centered', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('#page-btn');
    //Find the center of the DOM
    let centerX = document.documentElement.clientWidth / 2;
    let centerY = document.documentElement.clientHeight / 2;
    //Get the node in the center
    let elem = document.elementFromPoint(centerX, centerY);

    //Assert the button and the element in the center have the same DOM position
    /** https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
     * if elem is located earlier in the document and contains the node on which
     *  compareDocumentPosition() was called, then both the DOCUMENT_POSITION_CONTAINS
     *  and DOCUMENT_POSITION_PRECEDING bits would be set, producing a value of 10 (0x0A)
     * */
    expect(el.compareDocumentPosition(elem)).toBe(10);
  });
});
