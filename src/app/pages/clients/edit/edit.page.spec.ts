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

});
