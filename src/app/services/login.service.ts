import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { LoginComponent } from '../auth/login/login.component';
import { IUser } from '../interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'}),
  responseType: 'text' as 'json'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginEndpoint:string = "http://apitrello.herokuapp.com/users/login";
 
 
  constructor(private httpClient: HttpClient) { }

  public loginUser(data: IUser): Observable<string>{
        return this.httpClient.post<string>(this.loginEndpoint,data,httpOptions);
  }

  public isAuthenticated() :boolean{
    if(localStorage.length>0){
      const token:string = localStorage.getItem('id_token');
      if(token) return true;
    }
    return false;
  }
}
