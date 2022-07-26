export enum Tipo {
    NULL = "-",
    NOTEBOOK = "Notebook",
    COMPUTADORA = "PC",
    MONITOR = 'Monitor',
    TECLADO = 'Teclado',
    TELEFONO = 'Telefono',
    UPS = 'UPS',
    EQUIPO_VIDEO_CONFERENCIA = 'Equipo de video conferencia',
    AURICULAR = 'Auriculares',
    SILLA = 'Silla'
}

export function getAllEnumValues() {
    return Object.values(Tipo);
  }
  
  export function getTipoDescription(tipo: any) {
    switch (tipo) {
      case '-':
        return '-';

      case 'Notebook':
        return 'Notebook';
  
      case 'PC':
        return 'PC';

      case 'Monitor':
      return 'Monitor';

      case 'Teclado':
        return 'Teclado';
      
      case 'UPS':
        return 'UPS';

      case 'Equipo de video conferencia':
        return 'Equipo de video conferencia';
        
      case 'Auriculares':
        return 'Auriculares';

      case 'Telefono':
        return 'Telefono';

      case 'Silla':
        return 'Silla';

      default:
          return null;
    }
  }