import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'}),
  responseType: 'text' as 'json'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public loginUser(): Observable<string>{
    const data={"username":"xavi3333","password":"xavi33333"};
    return this.httpClient.post<string>("http://apitrello.herokuapp.com/users/login",data,httpOptions);
  }
}
