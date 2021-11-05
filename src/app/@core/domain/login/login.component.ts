import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../usuario/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  display:boolean = false;

  constructor(
    private authService: AuthService,
    private route: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
    this.isLogged();
    document.getElementById('inputUsername')?.focus();
  }

  login(){
    console.log(this.user);
    this.authService.login(this.user)
    .catch(error => {
      this.messageService.add({severity:'error', summary:'Error', detail:'Usuario o contraseña incorrectos'});
    })
  }
  
  getValue(event:any){
    return event.target.value;
  }
  
  focusPassword(){
    document.getElementById('inputPassword')?.focus();
  }
  
  focusBtnEnter(){
    document.getElementById('btnEnter')?.focus();
    setTimeout(()=>this.login(),10);
  }
  
  isLogged(){
    if(this.authService.userLogged()){
      this.route.navigate(['/']);
    }
  }

}
