import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Telefono } from './telefono.model';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  private url = `${environment.URL_API}/telefono/`;

  constructor(private http: HttpClient) {
  }
  //Todos los telefonos
  getAll() {
    return this.http.get<Telefono[]>(this.url);
  }

  getByIdComputadoras(id: number){
    return this.http.get<Telefono[]>(this.url + id);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Telefono>(this.url + id);
  }

  //Crear
  add(telefonos: Telefono) {
    return this.http.post<Telefono>(this.url, telefonos);
  }

  //Modificar
  update(telefonos: Telefono) {
    return this.http.put<Telefono>(this.url + telefonos.id, telefonos);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }
}
