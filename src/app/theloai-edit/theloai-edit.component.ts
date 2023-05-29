import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TheloaiService } from '../services/theloai.service';

@Component({
  selector: 'app-theloai-edit',
  templateUrl: './theloai-edit.component.html',
  styleUrls: ['./theloai-edit.component.css'],
})
export class TheloaiEditComponent implements OnInit {
  submited: boolean = false;
  theloais: any;

  theloaiForm = this.fb.group({
    id_theloai: ['', Validators.required],
    tentheloai: ['', Validators.required],
    mota: ['', Validators.required],
  });
  constructor(
    private ct: TheloaiService,
    private _router: Router,
    private fb: FormBuilder,
    private router: ActivatedRoute
  ) {}
  getALL() {
    this.ct.getTheloai().subscribe((res) => {
      this.theloais = res.result;
    });
  }
  ngOnInit(): void {
    this.getALL();

    //lấy ra 1 lsp để edit
    this.router.paramMap.subscribe((query) => {
      let id = query.get('id');
      this.ct.getID(id).subscribe((res) => {
        let mypro = res;
        this.theloaiForm = this.fb.group({
          id_theloai: [
            { value: mypro.id_theloai, disabled: true },
            Validators.required,
          ],
          tentheloai: [mypro.tentheloai, Validators.required],
          mota: [mypro.mota, Validators.required],
        });
      });
    });
  }
  onCreate() {
    this.ct.create(this.theloaiForm.getRawValue()).subscribe((res) => {
      this.getALL();
      this.theloaiForm.reset();
    });
  }
  get f() {
    return this.theloaiForm.controls;
  }
  onEdit(): any {
    this.submited = true;
    if (this.theloaiForm.invalid) {
      return false;
    }
    //sửa
    //sửa
  if (this.theloaiForm.value.id_theloai != null) {
    this.ct.update(this.theloaiForm.value, + this.theloaiForm.value.id_theloai).subscribe(res =>{
      this._router.navigate(['theloai']);
    })
  }
}}

