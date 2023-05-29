import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TacgiaService {

  constructor(private http: HttpClient) { }
  getTacgia(): Observable<any>{
    return this.http.get<any>('https://localhost:44342/api/TacGias')
  }
  getSearch(search_key:any =null): Observable<any>{
    let url= 'https://localhost:44342/api/TacGia/Search';
    if(search_key != null){
      url +='?name=' + search_key;
    }

    return this.http.get<any>( url)}
  getID(id:any): Observable<any>{
    return this.http.get<any>('https://localhost:44342/api/TacGias/' +id )
  }
  create(data:any): Observable<any>{ 
    return this.http.post<any>('https://localhost:44342/api/TacGias' ,data)
  }
  delete(id:number): Observable<any>{
    return this.http.delete<any>('https://localhost:44342/api/TacGias/' +id)
  }
  update(data:any,id:number): Observable<any>{
    return this.http.put<any>('https://localhost:44342/api/TacGias/'+id ,data)
  }
}
