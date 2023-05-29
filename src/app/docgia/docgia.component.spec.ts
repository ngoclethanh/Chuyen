import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocgiaComponent } from './docgia.component';

describe('DocgiaComponent', () => {
  let component: DocgiaComponent;
  let fixture: ComponentFixture<DocgiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocgiaComponent]
    });
    fixture = TestBed.createComponent(DocgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
