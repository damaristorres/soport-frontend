import { Procesador } from "../../enum/procesador.enum";
import { Tipo } from "../../enum/tipo.enum";
import { Status } from "../enums/status.enums";

export class Teclado {

    id!: number;
    usuario!: string;
    area!: string;
    modelo!: string;
    bp!: string;
    status!: Status;
  }
  