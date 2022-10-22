import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Responsabilidad, getResponsabilidadDescription } from 'src/app/@core/enum/responsabilidad.enum';
import { getStatusDescription, Status } from '../../enums/status.enums';
import { Teclado } from '../teclado.model';
import { TecladoService } from '../teclado.service';

@Component({
  selector: 'app-teclado-edit',
  templateUrl: './teclado-edit.component.html',
  styleUrls: ['./teclado-edit.component.css']
})
export class TecladoEditComponent implements OnInit {

 teclados = new Teclado();

  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));
  responsabilidades = Object.values(Responsabilidad).map(value => ({ label: getResponsabilidadDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/teclado";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: TecladoService,
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
    this.getData();
  }

  
  getData() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap) => {
          const id = paramMap.get('id');

          if (id) {
            this.isModoEdicion = true;
            this.service.getById(id)
              .subscribe(
                (teclado) => {
                  this.teclados = teclado;
                },
                (error) => {
                  console.log("error al cargar " + error);
                }
              )
          } 
        }
      )
  }

  add() {
    this.service.add(this.teclados)
      .subscribe(
        () => {
          this.returnToList();
        },
        (error) => {
          console.error(error)
        }
      )
  }

  update() {
    this.service.update(this.teclados)
      .subscribe(
        () => {
          this.returnToList();
        },
        (erro) => {
          console.error("Eror al actualizar " + erro);
        }
      )
  }

  returnToList() {
    this.router.navigate([this.ruta]);
  }
}
