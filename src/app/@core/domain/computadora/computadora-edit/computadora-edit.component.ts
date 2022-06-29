import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DepositoService } from '../../deposito/deposito.service';
import { Computadora } from '../computadora.model';
import { switchMap, tap } from 'rxjs/operators';
import { ComputadoraService } from '../computadora.service';


@Component({
  selector: 'app-computadora-edit',
  templateUrl: './computadora-edit.component.html',
  styleUrls: ['./computadora-edit.component.css']
})
export class ComputadoraEditComponent implements OnInit {
  loading: boolean = false;
  depositoId!: number;
  computadora: Computadora = {
    id: 0,
    usuario: '',
    area: '',
    tipo: '',
    modelo: '',
    procesador: ''
  };
  miFormulario: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.maxLength(50)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private computadoraService: ComputadoraService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.depositoId = id ? id : 0;
          if (!id) throw new Error();
          this.miFormulario.disable();
          this.loading = true;
          return this.computadoraService.getComputadora(id);
        })
      )
      .subscribe({
        next: (computadora) => {
          this.computadora = computadora;
          this.miFormulario.reset(computadora);
          this.miFormulario.enable();
          this.loading = false;
        },
        error: () => {
          this.router.navigate(['/computadoras/form']);
          this.loading = false;
          this.miFormulario.enable();
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
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    if (this.depositoId) this.actualizar();
    else this.insertar();
  }

  actualizar() {
    const usuario: string = this.miFormulario.get('usuario')?.value;
    const { id } = this.computadora;
    this.computadoraService
      .putComputadora(id, { ...this.computadora, usuario})
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
    this.computadoraService
      .postComputadora({ ...this.miFormulario.value })
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sistema',
            detail: 'Registro insertado',
          });
          this.router.navigate(['/computadoras', 'form', res.data.id]);
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
