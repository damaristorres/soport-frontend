import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ups } from './ups.model';

@Injectable({
  providedIn: 'root'
})
export class UpsService {

  private url = `${environment.URL_API}/ups/`;

  constructor(private http: HttpClient) {
  }
  //Todos los computadoras
  getAll() {
    return this.http.get<Ups[]>(this.url);
  }

  getByIdUpss(id: number){
    return this.http.get<Ups[]>(this.url + id);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Ups>(this.url + id);
  }

  //Crear
  add(ups: Ups) {
    return this.http.post<Ups>(this.url, ups);
  }

  //Modificar
  update(ups: Ups) {
    return this.http.put<Ups>(this.url + ups.id, ups);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }}
