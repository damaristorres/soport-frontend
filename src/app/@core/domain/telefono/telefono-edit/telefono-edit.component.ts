import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { getStatusDescription, Status } from '../../enums/status.enums';
import { Telefono } from '../telefono.model';
import { TelefonoService } from '../telefono.service';

@Component({
  selector: 'app-telefono-edit',
  templateUrl: './telefono-edit.component.html',
  styleUrls: ['./telefono-edit.component.css']
})
export class TelefonoEditComponent implements OnInit {

  
  telefonos = new Telefono();

  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/telefono";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: TelefonoService,
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
                (computadora) => {
                  this.telefonos = computadora;
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
    this.service.add(this.telefonos)
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
    this.service.update(this.telefonos)
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
