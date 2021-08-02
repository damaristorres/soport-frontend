import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mercaderia } from './mercaderia.model';

@Injectable({
  providedIn: 'root'
})
export class MercaderiaService {

  private URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  // Crea una mercaderia
  postMercaderia(mercaderia: Mercaderia): Observable<Mercaderia | HttpErrorResponse> {
    return this.http.post<Mercaderia>(`${this.URL_API}/mercaderia`, mercaderia);
  }

  // Altera una mercaderia | Inactiva si se envia status 'I'
  putMercaderia(id: number, mercaderia: Mercaderia): Observable<Mercaderia | HttpErrorResponse> {
    return this.http.put<Mercaderia>(`${this.URL_API}/mercaderia/${id}`, mercaderia);
  }

  // Obtiene todas las mercaderias
  getMercaderias(): Observable<Mercaderia[] | HttpErrorResponse> {
    return this.http.get<Mercaderia[]>(`${this.URL_API}/mercaderia`);
  }

  // Obtiene una mercaderia mediante su ID
  getMercaderia(id: number): Observable<Mercaderia | HttpErrorResponse> {
    return this.http.get<Mercaderia>(`${this.URL_API}/mercaderia/${id}`);
  }
}
