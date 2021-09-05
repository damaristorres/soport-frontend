import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Deposito } from '../deposito.model';
import { DepositoService } from '../deposito.service';

@Component({
  selector: 'app-deposito-list',
  templateUrl: './deposito-list.component.html',
  styleUrls: ['./deposito-list.component.scss'],
})
export class DepositoListComponent implements OnInit {
  depositos!: Deposito[];
  constructor(
    private depositoService: DepositoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.depositoService.getDepositos().subscribe((depositos) => {
      this.depositos = depositos;
    });
  }

  deleteRow(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      accept: () => {
        this.onDelete(id);
      },
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
