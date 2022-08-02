import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Monitor } from '../monitor/monitor.model';
import { Teclado } from './teclado.model';

@Injectable({
  providedIn: 'root'
})
export class TecladoService {


  private url = `${environment.URL_API}/teclado/`;

  constructor(private http: HttpClient) {
  }
  //Todos los teclados
  getAll() {
    return this.http.get<Teclado[]>(this.url);
  }

  getByIdTeclados(id: number){
    return this.http.get<Teclado[]>(this.url + id);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Teclado>(this.url + id);
  }

  //Crear
  add(teclados: Teclado) {
    return this.http.post<Teclado>(this.url, teclados);
  }

  //Modificar
  update(teclados: Teclado) {
    return this.http.put<Teclado>(this.url + teclados.id, teclados);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }}
