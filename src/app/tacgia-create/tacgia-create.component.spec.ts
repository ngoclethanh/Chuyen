import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacgiaCreateComponent } from './tacgia-create.component';

describe('TacgiaCreateComponent', () => {
  let component: TacgiaCreateComponent;
  let fixture: ComponentFixture<TacgiaCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacgiaCreateComponent]
    });
    fixture = TestBed.createComponent(TacgiaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
