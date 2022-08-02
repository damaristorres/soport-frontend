import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Telefono } from '../telefono.model';
import { TelefonoService } from '../telefono.service';

@Component({
  selector: 'app-telefono-list',
  templateUrl: './telefono-list.component.html',
  styleUrls: ['./telefono-list.component.css']
})
export class TelefonoListComponent implements OnInit {

  telefonos: Telefono[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/telefono`;

  constructor(
    private service: TelefonoService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTelefonos();
  }

  getTelefonos(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.telefonos = res;
          console.log(this.telefonos);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  delete(id: any) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar?',
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getTelefonos();
            },
            (error) => {
              this.display = true;
            }
          )
      },
      acceptLabel: "Confirmar",
      acceptButtonStyleClass: "p-button-danger p-mr-2"
    });
  }

}
