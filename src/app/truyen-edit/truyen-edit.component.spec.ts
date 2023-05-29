import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruyenEditComponent } from './truyen-edit.component';

describe('TruyenEditComponent', () => {
  let component: TruyenEditComponent;
  let fixture: ComponentFixture<TruyenEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruyenEditComponent]
    });
    fixture = TestBed.createComponent(TruyenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
