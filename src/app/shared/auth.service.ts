import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl='https://codingthailand.com/api/insert_user5.php';

  constructor(private http: HttpClient) { }

  register(formValues: any): Observable<any> {
    const myheaders = {'Content-Type': 'application/json'};
    return this.http.post<any>(this.registerUrl, formValues, {headers: myheaders});
  }

}
