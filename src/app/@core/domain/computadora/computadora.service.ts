import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Computadora } from './computadora.model';

interface ApiResponse {
  ok: boolean;
  message: string;
  data: Computadora;
}

@Injectable({
  providedIn: 'root',
})
export class ComputadoraService {
  private baseUrl: string = `${environment.URL_API}/computadora`;

  constructor(private http: HttpClient) {}

  // Todos los computadoras
  getComputadoras(): Observable<Computadora[]> {
    return this.http.get<Computadora[]>(`${this.baseUrl}/activo`);
  }

  // Ver un computadora
  getComputadora(id: number): Observable<Computadora> {
    return this.http.get<Computadora>(`${this.baseUrl}/activo/${id}`);
  }

  // Crear computadora
  postComputadora(computadora: Computadora): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, computadora);
  }

  // Editar computadora
  putComputadora(id: number, computadora: Computadora): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/${id}`, computadora);
  }

  // Eliminar un computadora
  deleteComputadora(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
  }
}
