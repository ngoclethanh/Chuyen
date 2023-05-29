import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongtruyenEditComponent } from './chuongtruyen-edit.component';

describe('ChuongtruyenEditComponent', () => {
  let component: ChuongtruyenEditComponent;
  let fixture: ComponentFixture<ChuongtruyenEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChuongtruyenEditComponent]
    });
    fixture = TestBed.createComponent(ChuongtruyenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
