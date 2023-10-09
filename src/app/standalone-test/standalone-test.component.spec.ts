import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneTestComponent } from './standalone-test.component';

describe('StandaloneTestComponent', () => {
  let component: StandaloneTestComponent;
  let fixture: ComponentFixture<StandaloneTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandaloneTestComponent]
    });
    fixture = TestBed.createComponent(StandaloneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
