import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Notebook } from './notebook.model';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  private url = `${environment.URL_API}/notebook/`;

  constructor(private http: HttpClient) {
  }
  //Todos los notebook
  getAll() {
    return this.http.get<Notebook[]>(this.url);
  }

  getByIdNotebooks(id: number){
    return this.http.get<Notebook[]>(this.url + id);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Notebook>(this.url + id);
  }

  //Crear
  add(notebookes: Notebook) {
    return this.http.post<Notebook>(this.url, notebookes);
  }

  //Modificar
  update(notebookes: Notebook) {
    return this.http.put<Notebook>(this.url + notebookes.id, notebookes);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }}
