import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocgiaEditComponent } from './docgia-edit.component';

describe('DocgiaEditComponent', () => {
  let component: DocgiaEditComponent;
  let fixture: ComponentFixture<DocgiaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocgiaEditComponent]
    });
    fixture = TestBed.createComponent(DocgiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
