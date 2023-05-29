import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuvienComponent } from './thuvien.component';

describe('ThuvienComponent', () => {
  let component: ThuvienComponent;
  let fixture: ComponentFixture<ThuvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThuvienComponent]
    });
    fixture = TestBed.createComponent(ThuvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
