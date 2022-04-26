import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { NotFoundPage } from './not-found.page';

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 404 Not Found as title', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-title');
    expect(el.textContent).toEqual('404 Not Found');
  });

});
