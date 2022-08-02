import { Procesador } from "../../enum/procesador.enum";
import { Tipo } from "../../enum/tipo.enum";
import { Status } from "../enums/status.enums";

export class Telefono {

    id!: number;
    usuario!: string;
    area!: string;
    interno!: string;
    bp!: string;
    status!: Status;
  }
  