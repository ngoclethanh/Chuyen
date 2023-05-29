import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TheloaiService {

  constructor(private http: HttpClient) { }
  getTheloai(){
    return this.http.get<any>('https://localhost:44342/api/TheLoais')
  }
  getSearch(search_key:any =null): Observable<any>{
    let url= 'https://localhost:44342/api/TheLoai/Search';
    if(search_key != null){
      url +='?name=' + search_key;
    }

    return this.http.get<any>( url)}
  getID(id:any): Observable<any>{
    return this.http.get<any>('https://localhost:44342/api/TheLoais/' +id )
  }
  create(data:any): Observable<any>{ 
    return this.http.post<any>('https://localhost:44342/api/TheLoais' ,data)
  }
  delete(id:number): Observable<any>{
    return this.http.delete<any>('https://localhost:44342/api/TheLoais/' +id)
  }
  update(data:any,id:number): Observable<any>{
    return this.http.put<any>('https://localhost:44342/api/TheLoais/'+id ,data)
  }
}
