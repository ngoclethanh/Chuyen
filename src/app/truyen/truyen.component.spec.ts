import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruyenComponent } from './truyen.component';

describe('TruyenComponent', () => {
  let component: TruyenComponent;
  let fixture: ComponentFixture<TruyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruyenComponent]
    });
    fixture = TestBed.createComponent(TruyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
