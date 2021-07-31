import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallsserviceService {

  constructor(private http: HttpClient) { }


  getdata(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  postdata(data: { name: string, age: number }): Observable<any> {
    return this.http.post('http://localhost:37558/api/sagarapi/createuser', data);
  }
}
