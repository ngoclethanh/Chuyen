import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheloaiCreateComponent } from './theloai-create.component';

describe('TheloaiCreateComponent', () => {
  let component: TheloaiCreateComponent;
  let fixture: ComponentFixture<TheloaiCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheloaiCreateComponent]
    });
    fixture = TestBed.createComponent(TheloaiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
