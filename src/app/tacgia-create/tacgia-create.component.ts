import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TacgiaService } from '../services/tacgia.service';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-tacgia-create',
  templateUrl: './tacgia-create.component.html',
  styleUrls: ['./tacgia-create.component.css']
})
export class TacgiaCreateComponent {
  tacgia: any;
  submited: any;

  tacgiaForm = this.fb.group({
    id_tacgia: '',
    tentacgia:'',
    ngaysinh: '',
    gioitinh: '',

  });

  constructor(
    private pd: TacgiaService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
    this.pd.getTacgia().subscribe((res) => {
      this.tacgia = res.result;
    });
  }
  ngOnInit(): void {
    this.getALL();
  }
  get f() {
    return this.tacgiaForm.controls;
  }
  onCreate(): any {
    this.submited = true;
    if (this.tacgiaForm.invalid) {
      return false;
    }
    //thêm
    this.pd.create(this.tacgiaForm.value).subscribe((res) => {
      this._route.navigate(['/tacgia']);
    });
  }
}
