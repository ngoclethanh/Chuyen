import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChuongtruyenService } from '../services/chuongtruyen.service';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-chuongtruyen-create',
  templateUrl: './chuongtruyen-create.component.html',
  styleUrls: ['./chuongtruyen-create.component.css']
})
export class ChuongtruyenCreateComponent {
  chuongtruyen: any;
  submited: any;

  chuongtruyenForm = this.fb.group({
    id_chuongtruyen: '',
    id_truyen:'',
    sothutu: '',
    tenchuong: '',
    noidung: '',
    ngaydang: '',

  });

  constructor(
    private pd: ChuongtruyenService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
    this.pd.getChuongtruyen().subscribe((res) => {
      this.chuongtruyen = res.result;
    });
  }
  ngOnInit(): void {
    this.getALL();
  }
  get f() {
    return this.chuongtruyenForm.controls;
  }
  onCreate(): any {
    this.submited = true;
    if (this.chuongtruyenForm.invalid) {
      return false;
    }
    //thêm
    this.pd.create(this.chuongtruyenForm.value).subscribe((res) => {
      this._route.navigate(['/chuong']);
    });
  }
}
