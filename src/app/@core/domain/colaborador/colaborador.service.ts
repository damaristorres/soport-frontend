import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Colaborador } from './colaborador.model';

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {

  private url = `${environment.URL_API}/colaborador/`;

  constructor(private http: HttpClient) {
  }
  //Todos los colaboradores
  getAll() {
    return this.http.get<Colaborador[]>(this.url);
  }

  getByIdColaboradors(id: number){
    return this.http.get<Colaborador[]>(this.url + id);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Colaborador>(this.url + id);
  }

  //Crear
  add(colaborador: Colaborador) {
    return this.http.post<Colaborador>(this.url, colaborador);
  }

  //Modificar
  update(colaborador: Colaborador) {
    return this.http.put<Colaborador>(this.url + colaborador.id, colaborador);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }
}