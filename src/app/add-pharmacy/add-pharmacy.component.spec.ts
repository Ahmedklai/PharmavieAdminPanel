/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddPharmacyComponent } from './add-pharmacy.component';

describe('AddPharmacyComponent', () => {
  let component: AddPharmacyComponent;
  let fixture: ComponentFixture<AddPharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
