import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinhluanComponent } from './binhluan.component';

describe('BinhluanComponent', () => {
  let component: BinhluanComponent;
  let fixture: ComponentFixture<BinhluanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BinhluanComponent]
    });
    fixture = TestBed.createComponent(BinhluanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
