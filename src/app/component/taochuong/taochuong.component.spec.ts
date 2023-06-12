import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaochuongComponent } from './taochuong.component';

describe('TaochuongComponent', () => {
  let component: TaochuongComponent;
  let fixture: ComponentFixture<TaochuongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaochuongComponent]
    });
    fixture = TestBed.createComponent(TaochuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
