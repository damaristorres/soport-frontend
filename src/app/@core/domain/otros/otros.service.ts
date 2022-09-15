import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Otros } from './otros.model';

@Injectable({
  providedIn: 'root'
})
export class OtrosesService {


  private url = `${environment.URL_API}/otros/`;

  constructor(private http: HttpClient) {
  }
  //Todos los Otros
  getAll() {
    return this.http.get<Otros[]>(this.url);
  }

  getByIdOtros(id: number){
    return this.http.get<Otros[]>(this.url + id);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Otros>(this.url + id);
  }

  //Crear
  add(otros: Otros) {
    return this.http.post<Otros>(this.url, otros);
  }

  //Modificar
  update(otros: Otros) {
    return this.http.put<Otros>(this.url + otros.id, otros);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }}
