import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { ReservationsPage } from './reservations.page';

describe('ReservationsPage', () => {
  let component: ReservationsPage;
  let fixture: ComponentFixture<ReservationsPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationsPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Reservations List as title', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-title');
    expect(el.textContent).toEqual('Reservations List');
  });

  it('should have an array of 3 reservations', () => {
    expect(component.reservations).toHaveSize(3);
  });

  it('should have a label with the reservation\'s date', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-label');
    expect(el.textContent).toEqual('2020-03-02T00:00:02.000Z');
  });

  it('should have a label with class element-label', () => {
    de = fixture.debugElement;
    el = de.nativeElement.querySelector('ion-label');
    expect(el.className).toContain('element-label');
  });
});
