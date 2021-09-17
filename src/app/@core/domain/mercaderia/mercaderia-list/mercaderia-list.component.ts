import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, finalize, retry } from 'rxjs/operators';
import { DolphinService } from '../dolphin.service';
import { Mercaderia } from '../mercaderia.model';
import { MercaderiaService } from '../mercaderia.service';

@Component({
  selector: 'app-mercaderia-list',
  templateUrl: './mercaderia-list.component.html',
  styleUrls: ['./mercaderia-list.component.css']
})
export class MercaderiaListComponent implements OnInit {

  mercaderias_stock: Mercaderia[] = [];
  loading: boolean = false; // Flag para control de situacion
  syncProgress: number = 0; // contador para seguir el estado de la sincronizacion
  totalMercDolphin: number = 0; // total de mercaderias a sincronizar
  syncErrors: HttpErrorResponse[] = []; // Almacena errores en la sincronizacion para posterior verificacion

  constructor(private mercaderiaService: MercaderiaService, private dolphinService: DolphinService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getMercaderiasStock();
  }

  // Obtiene todas las mercaderias
  getMercaderiasStock() {
    this.mercaderiaService.getMercaderias().subscribe(
      (response: Mercaderia[]) => {
        this.mercaderias_stock = response as Mercaderia[];
        this.loading = false;
      },
      (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.error) // TODO: Implementar servicio notificacion
        this.loading = false;
      }
    )
  }

  // Obtiene todas las mercaderias de Dolphin y las sincroniza con la base de scsp
  syncMercaderias() {
    this.loading = true;
    this.syncErrors = [];
    this.syncProgress = 0;
    this.dolphinService.getMercaderias().subscribe(
      (response: Mercaderia[]) => {
        const mercaderias_dolphin: Mercaderia[] = response as Mercaderia[];
        this.totalMercDolphin = mercaderias_dolphin.length;

        // Contador para contabilizar sincronizaciones
        let count = 0;


        /** 
        * Recorre todas las mercaderias obtenidas de Dolphin
        * sincronizando una por una con la base de scsp
        */
        from(mercaderias_dolphin)
          .pipe(concatMap(merc => of(
            this.mercaderiaService.postMercaderia(merc).subscribe(
              (response: Mercaderia) => {
                // Contabiliza la posicion
                this.syncProgress = mercaderias_dolphin.indexOf(merc) + 1;
              },
              (errorResponse: HttpErrorResponse) => {
                // Almacena los errores de sincronizacion
                this.syncErrors.push(errorResponse);

                // Contabiliza la posicion
                this.syncProgress = mercaderias_dolphin.indexOf(merc) + 1;
              })
          ).pipe(delay(10)))).subscribe(() => {
            // Al finalizar el concat cambia la flag
            if (this.syncProgress === mercaderias_dolphin.length) this.loading = false;
          })
      },
      (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.error) // TODO: Implementar servicio notificacion
        this.loading = false;
      }
    );
  }

}

