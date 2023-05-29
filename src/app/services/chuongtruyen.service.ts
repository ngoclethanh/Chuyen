import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuongtruyenService {

  constructor(private http: HttpClient) { }
  getChuongtruyen(): Observable<any>{
    return this.http.get<any>('https://localhost:44342/api/ChuongTruyens')
  }
  getSearch(search_key:any =null): Observable<any>{
    let url= 'https://localhost:44342/api/ChuongTruyen/Search';
    if(search_key != null){
      url +='?name=' + search_key;
    }

    return this.http.get<any>( url)}
  getID(id:any): Observable<any>{
    return this.http.get<any>('https://localhost:44342/api/ChuongTruyens/' +id )
  }
  create(data:any): Observable<any>{ 
    return this.http.post<any>('https://localhost:44342/api/ChuongTruyens' ,data)
  }
  delete(id:number): Observable<any>{
    return this.http.delete<any>('https://localhost:44342/api/ChuongTruyens/' +id)
  }
  update(data:any,id:number): Observable<any>{
    return this.http.put<any>('https://localhost:44342/api/ChuongTruyens/'+id ,data)
  }
}
