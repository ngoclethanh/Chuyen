import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TruyenService } from 'src/app/services/truyen.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css'],
})
export class DangnhapComponent {
  constructor(private service: TruyenService, private router: Router) {}
  model = { username: null, password: null };
  onLogin() {
    this.service.login(this.model).subscribe({
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