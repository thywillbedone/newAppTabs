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
    el = de.nativeElement.querySelector('ion-button');
    expect(el.textContent.trim()).toEqual('Clients');
  });
});
