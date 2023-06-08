import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TruyenService } from '../services/truyen.service';
import { Router } from '@angular/router';
import { DocgiaService } from '../services/docgia.service';

@Component({
  selector: 'app-dangnhap-admin',
  templateUrl: './dangnhap-admin.component.html',
  styleUrls: ['./dangnhap-admin.component.css']
})
export class DangnhapAdminComponent {
  @ViewChild('form') form!: NgForm;
  constructor(private service: DocgiaService, private router: Router) {}
  model = { username: null, password: null };
  onLogin(){
    if (this.form?.valid) {
      this.service.login(this.model).subscribe({
        next: (data) => {
          if (data.Code === 400) {
            alert('Tài khoản hoặc mật khẩu chưa chính xác');
          } else {
            this.router.navigateByUrl('/truyen')
          }
        },
        error: () => {
          alert('Có lỗi xảy ra');
        },
      });
    }
  }
}
