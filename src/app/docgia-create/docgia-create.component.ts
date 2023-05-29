import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DocgiaService } from '../services/docgia.service';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-docgia-create',
  templateUrl: './docgia-create.component.html',
  styleUrls: ['./docgia-create.component.css']
})
export class DocgiaCreateComponent {
  docgia: any;
  submited: any;

  docgiaForm = this.fb.group({
    id_docgia: '',
    username:'',
    password: '',
    email: '',
    tendaydu: '',
    anh: '',

  });

  constructor(
    private pd: DocgiaService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
    this.pd.getDocgia().subscribe((res) => {
      this.docgia = res.result;
    });
  }
  ngOnInit(): void {
    this.getALL();
  }
  get f() {
    return this.docgiaForm.controls;
  }
  onCreate(): any {
    this.submited = true;
    if (this.docgiaForm.invalid) {
      return false;
    }
    //thêm
    this.pd.create(this.docgiaForm.value).subscribe((res) => {
      this._route.navigate(['/docgia']);
    });
  }
}
