import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Computadora } from './computadora.model';

@Injectable({
  providedIn: 'root',
})
export class ComputadoraService {

  private url = `${environment.URL_API}/computadora/`;

  constructor(private http: HttpClient) {
  }
  //Todos los computadoras
  getAll() {
    return this.http.get<Computadora[]>(this.url);
  }

  getByIdComputadoras(id: number){
    return this.http.get<Computadora[]>(this.url + id);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Computadora>(this.url + id);
  }

  //Crear
  add(computadoras: Computadora) {
    return this.http.post<Computadora>(this.url, computadoras);
  }

  //Modificar
  update(computadoras: Computadora) {
    return this.http.put<Computadora>(this.url + computadoras.id, computadoras);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }
}