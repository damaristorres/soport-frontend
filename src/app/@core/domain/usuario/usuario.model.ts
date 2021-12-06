import { TipoUser } from '../../enum/tipo_user.enum';
import { GenericAtributes } from '../../shared/models/genericAtributes.model';

export class Usuario extends GenericAtributes{
    nombre!: string;
    login!: string;
    password!: string;
    tipo_user!: TipoUser;
}
