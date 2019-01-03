import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private errorMessage: String;


  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onFormSubmit(form:FormGroup){
    console.log("username ->" + form.controls['username'].value);
    console.log("password->" + form.controls['password'].value);
    this.loginService.loginUser()
    .subscribe( res =>{
      console.log("Respuesta ->" + res);
      if(res === null) this.errorMessage="No te puedes loguear"
    },
    (err)=>{
      console.error(err);
      this.errorMessage = "Error en Login";
    })
  }

}
