import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deposito } from './deposito.model';

interface ApiResponse{
  data: Deposito;
}

@Injectable({
  providedIn: 'root'
})
export class DepositoService {
  private baseUrl: string = `${environment.URL_API}/api/v1/deposito`;
  constructor(private http:HttpClient) { }

  // Todos los depositos
  getDepositos(): Observable<Deposito[]>{
    return this.http.get<Deposito[]>(this.baseUrl);
  }
  
  // Ver un deposito
  getDeposito(id: number): Observable<Deposito[]>{
    return this.http.get<Deposito[]>(`${this.baseUrl}/${id}`);
  }
  
  // Crear deposito
  postDeposito(deposito: Deposito): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl, deposito);
  }
  
  // Editar deposito
  putDeposito(id:number, deposito: Deposito): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(`${this.baseUrl}/${id}`, deposito);
  }


}
