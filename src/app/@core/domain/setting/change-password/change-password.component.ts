import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@core/shared/services/auth.service';
import { UsuariosService } from 'src/app/@core/shared/services/usuario.service';
import { ValidatorService } from 'src/app/@core/shared/services/validator.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formCambiar: FormGroup;
  formError:{ [key:string]:string } = {
    password:'',
    new_password:''
  }

  constructor(private userService:UsuariosService, private validatoForm:ValidatorService, private auth:AuthService) { 
    this.formCambiar = new FormGroup({});
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formCambiar = new FormGroup({
      password: new FormControl('', [Validators.required]),
      new_password: new FormControl('', [Validators.required])
    });
  }

  enviarRegistro(event:Event){
    event.preventDefault();
     if(this.formCambiar.valid){
        let value = this.formCambiar.value;
        Object.assign(value,{login:this.auth.getLogin()});
        this.userService.changePassword(value).then(result => this.buildForm()).catch(error => {console.log("login o password equivocados");this.buildForm();});
     }else{
       this.getFormErrors();
       this.focusValidation();
     }
  }


  getFormErrors(){
    let result = this.validatoForm.getErrors(this.formCambiar);
    for(let v of result){
      this.formError[v.position]=v.msj;
    }
  }

  focusValidation(){
    for(let t in this.formError){
      if(this.formError[t] != ''){
        document.getElementById(t)?.focus();
        break;
      }
    }
  }

}
