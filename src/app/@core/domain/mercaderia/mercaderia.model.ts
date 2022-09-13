import { Condicional } from "../../enum/condicional.enum";
import { Status } from "../enums/status.enums";

export class Mercaderia {
    cod_mercaderia!: number;
    cod_departamento!: number;
    cod_envase!: number;
    cod_fabricante!: string;
    cod_sugrupo!: number;
    cod_sucursal!: number;
    cod_unidad_medida!: number;
    codigo_barras!: string;
    controla_lote_mercaderia: Condicional;
    descripcion!: string;
    envase_desc!: string;
    fabricante_desc!: string;
    status: Status;

    constructor() {
        this.controla_lote_mercaderia = Condicional.NO;
        this.status = Status.ACTIVA;
    }
}
