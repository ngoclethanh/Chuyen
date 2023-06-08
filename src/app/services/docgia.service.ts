import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DocgiaService {

  constructor(private http: HttpClient) { }
getDocgia(): Observable<any>{
    return this.http.get<any>('https://localhost:44342/api/DocGias')
  }
  getSearch(search_key:any =null): Observable<any>{
    let url= 'https://localhost:44342/api/DocGia/Search';
    if(search_key != null){
      url +='?name=' + search_key;
    }

    return this.http.get<any>( url)}
  getID(id:any): Observable<any>{
    return this.http.get<any>('https://localhost:44342/api/DocGias/' +id )
  }
  create(data:any): Observable<any>{ 
    return this.http.post<any>('https://localhost:44342/api/DocGias' ,data)
  }
  delete(id:number): Observable<any>{
    return this.http.delete<any>('https://localhost:44342/api/DocGias/' +id)
  }
  update(data:any,id:number): Observable<any>{
    return this.http.put<any>('https://localhost:44342/api/DocGias/'+id ,data)
  }
  login(data:any): Observable<any>{ 
    return this.http.post<any>('https://localhost:44342/api/Taikhoans/Login' ,data).pipe(
      map((user) => {
        //debugger;
        sessionStorage.setItem('admin', JSON.stringify(user));
        return user;
      })
    );
  }
}
