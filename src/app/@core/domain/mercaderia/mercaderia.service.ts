import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, observable, Observable, of, timer } from 'rxjs';
import { concatMap, delay, map, retryWhen } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Mercaderia } from './mercaderia.model';

@Injectable({
  providedIn: 'root'
})
export class MercaderiaService {

  private API = environment.URL_API;

  constructor(private http: HttpClient) { }

  // crea una mercaderia proveniente de Dolphin (crea o actualiza)
  postMercaderia(mercaderia: Mercaderia): Observable<Mercaderia> {
    return this.http.post<Mercaderia>(`${this.API}/mercaderia`, mercaderia);
  }

  // Obtiene todas las mercaderias
  getMercaderias(): Observable<Mercaderia[]> {
    return this.http.get<Mercaderia[]>(`${this.API}/mercaderia`);
  }

  // Obtiene una mercaderia mediante su ID
  getMercaderia(id: number): Observable<Mercaderia> {
    return this.http.get<Mercaderia>(`${this.API}/mercaderia/${id}`);
  }
}
