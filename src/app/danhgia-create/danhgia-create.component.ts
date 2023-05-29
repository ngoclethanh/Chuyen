import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DanhgiaService } from '../services/danhgia.service';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-danhgia-create',
  templateUrl: './danhgia-create.component.html',
  styleUrls: ['./danhgia-create.component.css']
})
export class DanhgiaCreateComponent {
  danhgia: any;
  submited: any;

  danhgiaForm = this.fb.group({
    id_danhgia: '',
    id_truyen:'',
    id_docgia: '',
    noidung: '',

    ngaydang: '',

  });

  constructor(
    private pd: DanhgiaService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
    this.pd.getDanhgia().subscribe((res) => {
      this.danhgia = res.result;
    });
  }
  ngOnInit(): void {
    this.getALL();
  }
  get f() {
    return this.danhgiaForm.controls;
  }
  onCreate(): any {
    this.submited = true;
    if (this.danhgiaForm.invalid) {
      return false;
    }
    //thêm
    this.pd.create(this.danhgiaForm.value).subscribe((res) => {
      this._route.navigate(['/danhgia']);
    });
  }
}
