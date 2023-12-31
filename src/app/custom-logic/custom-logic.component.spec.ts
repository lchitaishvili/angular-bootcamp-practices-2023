import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLogicComponent } from './custom-logic.component';

describe('CustomLogicComponent', () => {
  let component: CustomLogicComponent;
  let fixture: ComponentFixture<CustomLogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomLogicComponent]
    });
    fixture = TestBed.createComponent(CustomLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
