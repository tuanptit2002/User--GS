import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanOnlineComponent } from './lean-online.component';

describe('LeanOnlineComponent', () => {
  let component: LeanOnlineComponent;
  let fixture: ComponentFixture<LeanOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeanOnlineComponent]
    });
    fixture = TestBed.createComponent(LeanOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
