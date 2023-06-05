import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangtruyenComponent } from './dangtruyen.component';

describe('DangtruyenComponent', () => {
  let component: DangtruyenComponent;
  let fixture: ComponentFixture<DangtruyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangtruyenComponent]
    });
    fixture = TestBed.createComponent(DangtruyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
