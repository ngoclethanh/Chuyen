import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctruyenComponent } from './doctruyen.component';

describe('DoctruyenComponent', () => {
  let component: DoctruyenComponent;
  let fixture: ComponentFixture<DoctruyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctruyenComponent]
    });
    fixture = TestBed.createComponent(DoctruyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
