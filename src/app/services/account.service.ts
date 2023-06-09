import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}
  url = 'https://localhost:44342/api/Taikhoans';
  get() {
    return this.http.get<any>(this.url);
  }

  getID(id: any) {
    return this.http.get<any>(this.url + id);
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + id);
  }
  update(data: any): Observable<any> {
    return this.http.put<any>(this.url, data);
  }
}
