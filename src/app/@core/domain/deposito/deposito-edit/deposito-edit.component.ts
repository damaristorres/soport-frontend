import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Deposito } from '../deposito.model';
import { switchMap, tap } from 'rxjs/operators';
import { DepositoService } from '../deposito.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-deposito-edit',
  templateUrl: './deposito-edit.component.html',
  styleUrls: ['./deposito-edit.component.css'],
})
export class DepositoEditComponent implements OnInit {
  depositoId!: number;
  deposito: Deposito = {
    id: 0,
    nombre: '',
  };
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(50)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private depositoService: DepositoService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.depositoId = id ? id : 0;
          return this.depositoService.getDeposito(id);
        })
      )
      .subscribe({
        next: (deposito) => {
          this.deposito = deposito;
          this.miFormulario.reset(deposito);
        },
        error: () => {
          this.router.navigate(['/deposito/form']);
        },
      });
  }

  campoInvalido(campo: string) {
    return (
      this.miFormulario.get(campo)?.touched &&
      this.miFormulario.get(campo)?.invalid
    );
  }

  handleSubmit() {
    if (this.depositoId) this.actualizar();
    else this.insertar();
  }

  actualizar() {
    const nombre: string = this.miFormulario.get('nombre')?.value;
    const { id } = this.deposito;
    this.depositoService
      .putDeposito(id, { ...this.deposito, nombre })
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sistema',
            detail: 'Registro actualizado',
          });
        },
        error: (e) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Sistema',
            detail: 'Error al insertar',
          });
        },
      });
  }

  insertar() {
    this.depositoService
      .postDeposito({ ...this.miFormulario.value })
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sistema',
            detail: 'Registro insertado',
          });
          this.router.navigate(['/deposito', 'form', res.data.id]);
        },
        error: (e) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Sistema',
            detail: 'Error al insertar',
          });
        },
      });
  }
}
