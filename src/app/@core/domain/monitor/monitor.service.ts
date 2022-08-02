import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Monitor } from './monitor.model';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private url = `${environment.URL_API}/monitor/`;

  constructor(private http: HttpClient) {
  }
  //Todos los monitores
  getAll() {
    return this.http.get<Monitor[]>(this.url);
  }

  getByIdMonitors(id: number){
    return this.http.get<Monitor[]>(this.url + id);
  }

  //Se obtiene por id
  getById(id: any) {
    return this.http.get<Monitor>(this.url + id);
  }

  //Crear
  add(monitors: Monitor) {
    return this.http.post<Monitor>(this.url, monitors);
  }

  //Modificar
  update(monitors: Monitor) {
    return this.http.put<Monitor>(this.url + monitors.id, monitors);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }
}
