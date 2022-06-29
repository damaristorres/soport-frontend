

import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Computadora } from '../computadora.model';
import { ComputadoraService } from '../computadora.service';



@Component({
  selector: 'app-computadora-list',
  templateUrl: './computadora-list.component.html',
  styleUrls: ['./computadora-list.component.css']
})
export class ComputadoraListComponent implements OnInit {

  computadoras!: Computadora[];
  dataLoading: boolean = true;
  constructor(
    private computadoraService: ComputadoraService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.computadoraService.getComputadoras().subscribe((computadoras) => {
      this.computadoras = computadoras;
      this.dataLoading = false;
    });
  }

  deleteRow(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      accept: () => {
        this.onDelete(id);
      },
      acceptLabel: 'Sí',
      header: 'Sistema',
      icon: 'pi pi-exclamation-triangle',
      message: '¿Seguro que desea borrar el registro? Esta acción no se puede deshacer.',
      defaultFocus: 'none',
    });
  }

  onDelete(id: number) {
    this.computadoraService.deleteComputadora(id).subscribe((_) => {
      this.computadoras = this.computadoras.filter((computadora) => computadora.id != id);
      this.messageService.add({
        severity: 'info',
        summary: 'Sistema',
        detail: 'Registro eliminado',
      });
    });
  }
}
