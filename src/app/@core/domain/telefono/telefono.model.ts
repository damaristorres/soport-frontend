import { Responsabilidad } from "../../enum/responsabilidad.enum";
import { Status } from "../enums/status.enums";

export class Telefono {

    id!: number;
    usuario!: string;
    userold!: string;
    ubicacion!: string;
    interno!: string;
    bp!: string;
    status!: Status;
    responsabilidad!: Responsabilidad;

  }
  