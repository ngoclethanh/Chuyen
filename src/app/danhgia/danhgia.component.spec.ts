import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhgiaComponent } from './danhgia.component';

describe('DanhgiaComponent', () => {
  let component: DanhgiaComponent;
  let fixture: ComponentFixture<DanhgiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhgiaComponent]
    });
    fixture = TestBed.createComponent(DanhgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
