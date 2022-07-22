import { Procesador } from "../../enum/procesador.enum";
import { Tipo } from "../../enum/tipo.enum";
import { Status } from "../enums/status.enums";

export class Computadora {

    id!: number;
    usuario!: string;
    area!: string;
    tipo!: string;
    bp!: string;
    modelo!: string;
    procesador!: Procesador;
    status!: Status;
  }
  