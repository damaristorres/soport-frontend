import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Computadora } from '../computadora.model';
import { ComputadoraService } from '../computadora.service';

@Component({
  selector: 'app-computadora-list',
  templateUrl: './computadora-list.component.html',
  styleUrls: ['./computadora-list.component.css']
})
export class ComputadoraListComponent implements OnInit {
  
  computadoras: Computadora[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/computadora`;

  constructor(
    private service: ComputadoraService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getComputadoras();
  }

  getComputadoras(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.computadoras = res;
          console.log(this.computadoras);
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
              this.getComputadoras();
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
