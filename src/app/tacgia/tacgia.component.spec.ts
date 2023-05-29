import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacgiaComponent } from './tacgia.component';

describe('TacgiaComponent', () => {
  let component: TacgiaComponent;
  let fixture: ComponentFixture<TacgiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacgiaComponent]
    });
    fixture = TestBed.createComponent(TacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
