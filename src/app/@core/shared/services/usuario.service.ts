import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeUser } from '../../domain/usuario/changeUser.model';
import { GenericService } from './generic.service';
import { User } from '../../domain/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends GenericService<User>{

  constructor(private readonly httpClient:HttpClient) {
    super("user",httpClient);
  }

   url= 'http://localhost:3000/api/v1'

  async changePassword(user:ChangeUser){
    return await this.httpClient.post(this.url+"/user/changePassword", user).toPromise();
  }
}
