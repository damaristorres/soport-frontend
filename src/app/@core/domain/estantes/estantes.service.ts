import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Deposito } from '../deposito/deposito.model';
import { Estantes } from './estantes.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EstantesService {
  private url = `${environment.URL_API}/estantes/`;

  deposito!: Deposito;
  estantes: Estantes;

  constructor(private http: HttpClient) {
    this.estantes = new Estantes();
  }
  //Todos los estantes
  getAll() {
    return this.http.get<Estantes[]>(this.url);
  }

  //Se obtiene por id de Deposito
  getByIdDeposito(depositoId: number) {
    return this.http.get<Estantes[]>(
      this.url + '/api/v1/deposito/' + depositoId
    );
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Estantes>(this.url + id);
  }

  //Crear
  add(estantes: Estantes) {
    return this.http.post<Estantes>(this.url, estantes);
  }

  //Modificar
  update(
    id: number,
    estantes: Estantes
  ): Observable<Estantes | HttpErrorResponse> {
    return this.http.put<Estantes>(this.url + estantes.id, estantes);
  }
}
