import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TheloaiService } from '../services/theloai.service';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-theloai-create',
  templateUrl: './theloai-create.component.html',
  styleUrls: ['./theloai-create.component.css']
})
export class TheloaiCreateComponent {
  theloai: any;
  submited: any;

  theloaiForm = this.fb.group({
    tentheloai:'',
  });

  constructor(
    private pd: TheloaiService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
    this.pd.getTheloai().subscribe((res) => {
      this.theloai = res.result;
    });
  }
  ngOnInit(): void {
    this.getALL();
  }
  get f() {
    return this.theloaiForm.controls;
  }
  onCreate(): any {
    this.submited = true;
    if (this.theloaiForm.invalid) {
      return false;
    }
    //thêm
    this.pd.create(this.theloaiForm.value).subscribe((res) => {
      this._route.navigate(['/theloai']);
    });
  }
}
