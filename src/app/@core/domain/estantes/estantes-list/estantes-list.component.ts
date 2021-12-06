import { Component, OnInit } from '@angular/core';
import { EstantesService } from '../estantes.service';
import { DepositoService } from '../../deposito/deposito.service';
import { Deposito } from '../../deposito/deposito.model';
import { Estantes } from '../estantes.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Status } from '../../enums/status.enums';
import { getStatus } from '../../../enum/status.enum';

@Component({
  selector: 'app-estantes-list',
  templateUrl: './estantes-list.component.html',
  styleUrls: ['./estantes-list.component.css']
})
export class EstantesListComponent implements OnInit {
  depositos!: Deposito[];
  dataLoading: boolean = true;
  constructor(
    private depositoService: DepositoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.depositoService.getDepositos().subscribe((depositos) => {
      this.depositos = depositos;
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
      message:
        '¿Seguro que desea borrar el registro? Esta acción no se puede deshacer.',
      defaultFocus: 'none',
    });
  }

  onDelete(id: number) {
    this.depositoService.deleteDeposito(id).subscribe((_) => {
      this.depositos = this.depositos.filter((deposito) => deposito.id != id);
      this.messageService.add({
        severity: 'info',
        summary: 'Sistema',
        detail: 'Registro eliminado',
      });
    });
  }
}
