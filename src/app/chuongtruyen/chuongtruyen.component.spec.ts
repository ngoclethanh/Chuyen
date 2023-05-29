import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongtruyenComponent } from './chuongtruyen.component';

describe('ChuongtruyenComponent', () => {
  let component: ChuongtruyenComponent;
  let fixture: ComponentFixture<ChuongtruyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChuongtruyenComponent]
    });
    fixture = TestBed.createComponent(ChuongtruyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
