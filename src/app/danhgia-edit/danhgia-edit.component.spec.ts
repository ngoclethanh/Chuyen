import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhgiaEditComponent } from './danhgia-edit.component';

describe('DanhgiaEditComponent', () => {
  let component: DanhgiaEditComponent;
  let fixture: ComponentFixture<DanhgiaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhgiaEditComponent]
    });
    fixture = TestBed.createComponent(DanhgiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
