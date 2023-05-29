import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Truyen } from '../models/Truyen';

@Injectable({
  providedIn: 'root'
})
export class TruyenService {

  constructor(private http: HttpClient) { }
  getTruyen(){
    return this.http.get<any>('https://localhost:44342/api/Truyens')
  }
  getSearch(search_key:any =null): Observable<any>{
    let url= 'https://localhost:44342/api/Truyen/Search';
    if(search_key != null){
      url +='?name=' + search_key;
    }

    return this.http.get<any>( url)}
 
  getID(id:any){
    return this.http.get<any>('https://localhost:44342/api/Truyens/' +id )
  }
  create(data:any): Observable<any>{ 
    return this.http.post<any>('https://localhost:44342/api/Truyens' ,data)
  }
  delete(id:number): Observable<any>{
    return this.http.delete<any>('https://localhost:44342/api/Truyens/' +id)
  }
  update(data:any,id:number): Observable<any>{
    return this.http.put<any>('https://localhost:44342/api/Truyens/'+id ,data)
 
  }
  getThuvien(){
    let thuvienjson = sessionStorage.getItem('thuvien');
    if(thuvienjson){
      return JSON.parse(thuvienjson);
    }else{
      return [];
    }
  }
  saveThuvien(thuvien:any){
    let thuvienjson =JSON.stringify(thuvien);
sessionStorage.setItem('thuvien',thuvienjson)
  }

}
