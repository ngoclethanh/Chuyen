import { Component, ElementRef, ViewChild } from '@angular/core';
import { AccountService } from '../services/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private service: AccountService) {
    this.accountList();
  }
  @ViewChild('modalGroup', { static: false }) modalGroup!: ElementRef;
  @ViewChild('form', { static: false }) form!: NgForm;
  admin = JSON.parse(sessionStorage.getItem('admin') || '{}');
  account: any = [];
  data: any;
  accountList() {
    this.service.get().subscribe((res) => {
      this.account = res;
    });
  }
  model = {
    remove: 0,
    create: 0,
    update: 0,
    tendaydu: null,
    usename: null,
    chucvu: null,
    id_taikhoan: 0,
    password:1//mặc định là 1
  };
  reset() {
    this.form?.reset();
    this.form?.resetForm();
    this.model = {
      remove: 0,
      create: 0,
      update: 0,
      tendaydu: null,
      usename: null,
      chucvu: null,
      id_taikhoan: 0,
      password:1
    };
  }
  getData(item: any) {
    this.model.id_taikhoan = item.id_taikhoan;
    this.model.chucvu = item.chucvu;
    this.model.tendaydu = item.tendaydu;
    this.model.create = item.create;
    this.model.update = item.update;
    this.model.remove = item.remove;
    this.model.usename = item.usename;
    this.model.password=item.password;
  }
  updatePermision() {
    if (this.model.id_taikhoan !== 0) {
      //có value
      this.service.update(this.model).subscribe({
        next: (value) => {
          this.accountList();
          this.modalGroup.nativeElement.querySelector('button.close').click();
          alert('Cập nhật thành công');
        },
      });
    } else {
      this.service.create(this.model).subscribe({
        next: (value) => {
          this.accountList();
          this.modalGroup.nativeElement.querySelector('button.close').click();
          alert('Thêm thành công');
        },
      });
    }
  }
}
