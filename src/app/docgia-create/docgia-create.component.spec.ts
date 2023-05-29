import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocgiaCreateComponent } from './docgia-create.component';

describe('DocgiaCreateComponent', () => {
  let component: DocgiaCreateComponent;
  let fixture: ComponentFixture<DocgiaCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocgiaCreateComponent]
    });
    fixture = TestBed.createComponent(DocgiaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
