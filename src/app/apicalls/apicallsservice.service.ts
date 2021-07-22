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
  postdata(data: any): Observable<any> {
    return this.http.post('http://outtm.com', data);
  }
}
