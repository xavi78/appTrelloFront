import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {IUser} from '../../interfaces/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private errorMessage: String;


  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onFormSubmit(form:FormGroup){
    const data:IUser= {
       "username" : form.controls['username'].value,
      "password": form.controls['password'].value};

    this.loginService.loginUser(data)
    .subscribe( res =>{
      console.log("Respuesta ->" + res);
     
      if(res === null) this.errorMessage="No te puedes loguear"
      else{
        localStorage.setItem('id_token',res);
        this.router.navigate(['/home']);
      }
    },
    (err)=>{
      console.error(err);
      this.errorMessage = "Error en Login";
    })
  }

}
