import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class GuardUserService {

  constructor(public loginService: LoginService, public router:Router) { }

  canActivate():boolean {
    if (!this.loginService.isAuthenticated()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
