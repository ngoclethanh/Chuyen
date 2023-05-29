import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruyenCreateComponent } from './truyen-create.component';

describe('TruyenCreateComponent', () => {
  let component: TruyenCreateComponent;
  let fixture: ComponentFixture<TruyenCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruyenCreateComponent]
    });
    fixture = TestBed.createComponent(TruyenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
