import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { EditPage } from './edit.page';

describe('EditPage', () => {
  let component: EditPage;
  let fixture: ComponentFixture<EditPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPage);
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

  it('should have Edit Client as title', () => {
    de = fixture.debugElement.query(By.css('ion-title'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('Edit Client');
  });

  it('should have a back button', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-back-button');
    expect(el.getAttribute('text')).toEqual('Back');
  });

  it('should have a home button', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-button');
    expect(el.getAttribute('routerlink')).toEqual('/');
  });
});
