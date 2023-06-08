import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TruyenService } from 'src/app/services/truyen.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css'],
})
export class DangnhapComponent {
  @ViewChild('form') form!: NgForm;
  constructor(private service: TruyenService, private router: Router) {}
  model = { username: null, password: null,key:true };
  
  onLogin() {
    if (this.model.key) {
      //true thì sẽ là đn vào độc giả
      if (this.form?.valid) {
        this.service.login(this.model,this.model.key).subscribe({
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
    } else {
      //false sẽ là tác giả
      if (this.form?.valid) {
        this.service.login(this.model,this.model.key!).subscribe({
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
}
