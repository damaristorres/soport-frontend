import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mercaderia } from './mercaderia.model';

@Injectable({
  providedIn: 'root'
})
export class DolphinService {

  private API = environment.URL_DOLPHIN_API;

  constructor(private http: HttpClient) { }

  // Obtiene todas las mercaderias de Dolphin
  getMercaderias(): Observable<Mercaderia[]> {
    return this.http.get<Mercaderia[]>(`${this.API}/mercaderia`);
  }

  // Obtiene una mercaderia de Dolphin mediante su ID
  getMercaderia(id: number): Observable<Mercaderia> {
    return this.http.get<Mercaderia>(`${this.API}/mercaderia/${id}`);
  }
  
}
