import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruyentheotacgiaComponent } from './truyentheotacgia.component';

describe('TruyentheotacgiaComponent', () => {
  let component: TruyentheotacgiaComponent;
  let fixture: ComponentFixture<TruyentheotacgiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruyentheotacgiaComponent]
    });
    fixture = TestBed.createComponent(TruyentheotacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
