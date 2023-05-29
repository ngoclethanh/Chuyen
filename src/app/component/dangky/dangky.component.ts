import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {  DocgiaService} from 'src/app/services/docgia.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent {
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
      this._route.navigate(['/home']);
    });
  }
}
