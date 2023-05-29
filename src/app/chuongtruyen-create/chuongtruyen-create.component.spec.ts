import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongtruyenCreateComponent } from './chuongtruyen-create.component';

describe('ChuongtruyenCreateComponent', () => {
  let component: ChuongtruyenCreateComponent;
  let fixture: ComponentFixture<ChuongtruyenCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChuongtruyenCreateComponent]
    });
    fixture = TestBed.createComponent(ChuongtruyenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
