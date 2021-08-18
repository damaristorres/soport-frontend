import { Component, OnInit } from '@angular/core';
import { EstantesService } from '../estantes.service';
import { DepositoService } from '../../deposito/deposito.service';

@Component({
  selector: 'app-estantes-list',
  templateUrl: './estantes-list.component.html',
  styleUrls: ['./estantes-list.component.css']
})
export class EstantesListComponent implements OnInit {

  constructor(
    private service: DepositoService,
    private EstantesService: EstantesService
  ) { }

  ngOnInit(): void {
  }

}
