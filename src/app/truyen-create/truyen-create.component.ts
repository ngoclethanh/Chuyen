import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TruyenService } from '../services/truyen.service';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-truyen-create',
  templateUrl: './truyen-create.component.html',
  styleUrls: ['./truyen-create.component.css']
})
export class TruyenCreateComponent {
  truyen: any;
  submited: any;

  truyenForm = this.fb.group({
    id_truyen: '',
    tentruyen: '',
    id_tacgia: '',
    id_theloai: '',
    trangthai: '',
    ngaydang: '',
    anh: '',
    mota: '',
  });

  constructor(
    private pd: TruyenService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
    this.pd.getTruyen().subscribe((res) => {
      this.truyen = res.result;
    });
  }
  ngOnInit(): void {
    this.getALL();
  }
  get f() {
    return this.truyenForm.controls;
  }
  onCreate(): any {
    this.submited = true;
    if (this.truyenForm.invalid) {
      return false;
    }
    //thêm
    this.pd.create(this.truyenForm.value).subscribe((res) => {
      this._route.navigate(['/truyen']);
    });
  }
}
