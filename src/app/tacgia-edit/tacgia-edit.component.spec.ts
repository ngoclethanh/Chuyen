import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacgiaEditComponent } from './tacgia-edit.component';

describe('TacgiaEditComponent', () => {
  let component: TacgiaEditComponent;
  let fixture: ComponentFixture<TacgiaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacgiaEditComponent]
    });
    fixture = TestBed.createComponent(TacgiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
