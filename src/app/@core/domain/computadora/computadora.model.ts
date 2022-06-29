import { Procesador } from "../../enum/procesador.enum";
import { Tipo } from "../../enum/tipo.enum";

export interface Computadora {
    id: number;
    usuario: string;
    area: string;
    tipo: string;
    modelo: string;
    procesador: string;
    
  }
  