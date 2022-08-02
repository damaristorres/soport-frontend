import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Teclado } from '../teclado.model';
import { TecladoService } from '../teclado.service';

@Component({
  selector: 'app-teclado-list',
  templateUrl: './teclado-list.component.html',
  styleUrls: ['./teclado-list.component.css']
})
export class TecladoListComponent implements OnInit {


  teclados: Teclado[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/teclado`;

  constructor(
    private service: TecladoService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTeclados();
  }

  getTeclados(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.teclados = res;
          console.log(this.teclados);
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
              this.getTeclados();
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
