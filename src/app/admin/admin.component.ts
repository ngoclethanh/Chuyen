import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private service: AccountService) {
    this.accountList();
  }
  admin = JSON.parse(sessionStorage.getItem('admin') || '{}');
  account: any = [];
  accountList() {
    this.service.get().subscribe((res) => {
      this.account = res;
    });
  }
  model = { remove: 0, create: 0, update: 0 };
  updatePermision() {
    
  }
}
