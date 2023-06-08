import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  constructor( private router: Router) {}
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean>  {
    const user = JSON.parse(sessionStorage.getItem('admin') || '{}');
    console.log(user.id_taikhoan);
    
    return new Observable<boolean>((_observable) => {
      if (!user.id_taikhoan) {
        this.router.navigateByUrl('/dangnhapAdmin');
      }
      setTimeout(() => {
        return _observable.next(true);
      }, 100);
    });
  }
}
