import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {  DanhgiaService} from 'src/app/services/danhgia.service';

@Component({
  selector: 'app-binhluan',
  templateUrl: './binhluan.component.html',
  styleUrls: ['./binhluan.component.css']
})
export class BinhluanComponent {
  danhgia: any;
  submited: any;

  danhgiaForm = this.fb.group({
    id_danhgia: '',
    noidung:'',
    
  });

  constructor(
    private dg: DanhgiaService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
    this.dg.getDanhgia().subscribe((res) => {
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
    this.dg.create(this.danhgiaForm.value).subscribe((res) => {
      this._route.navigate(['/home']);
    });
  }
}


