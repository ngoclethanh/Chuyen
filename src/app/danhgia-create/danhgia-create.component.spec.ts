import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhgiaCreateComponent } from './danhgia-create.component';

describe('DanhgiaCreateComponent', () => {
  let component: DanhgiaCreateComponent;
  let fixture: ComponentFixture<DanhgiaCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhgiaCreateComponent]
    });
    fixture = TestBed.createComponent(DanhgiaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
