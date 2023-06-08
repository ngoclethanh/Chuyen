import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TruyenService } from 'src/app/services/truyen.service';

@Component({
  selector: 'app-dangnhap-docgia',
  templateUrl: './dangnhap-docgia.component.html',
  styleUrls: ['./dangnhap-docgia.component.css'],
})
export class DangnhapDocgiaComponent {
  @ViewChild('form') form!: NgForm;
  constructor(private service: TruyenService, private router: Router) {}
  model = { username: null, password: null };
  onLogin(){
    if (this.form?.valid) {
      this.service.login(this.model,true).subscribe({
        next: (data) => {
          if (data.Code === 400) {
            alert('Tài khoản hoặc mật khẩu chưa chính xác');
          } else {
            this.router.navigate(['/home']).then();
          }
        },
        error: () => {
          alert('Có lỗi xảy ra');
        },
      });
    }
  }
}
