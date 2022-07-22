export enum Tipo {
    NOTEBOOK = "Notebook",
    COMPUTADORA = "PC",
    MONITOR = 'Monitor',
    TECLADO = 'Teclado',
    UPS = 'UPS',
    AURICULAR = 'Auriculares',
    TELEFONO = 'Teléfono',
}

export function getAllEnumValues() {
    return Object.values(Tipo);
  }
  
  export function getTipoDescription(tipo: any) {
    switch (tipo) {
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
        
      case 'Auriculares':
        return 'Auriculares';

      case 'Teléfono':
        return 'Teléfono';

      default:
          return null;
    }
  }