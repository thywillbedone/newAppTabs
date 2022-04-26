import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { ClientsPage } from './clients.page';

describe('ClientsPage', () => {
  let component: ClientsPage;
  let fixture: ComponentFixture<ClientsPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Clients List as title', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-title');
    expect(el.textContent).toEqual('Clients List');
  });

  it('should have an array of 3 clients', () => {
    expect(component.clients).toHaveSize(3);
  });

  it('should have an edit button', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-button');
    expect(el.textContent).toBe('Edit');
  });

});
