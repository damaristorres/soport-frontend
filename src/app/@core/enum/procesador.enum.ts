export enum Procesador {
    NULL = "-",
    i7 = "i7",
    i5 = "i5",
    i3 = "i3"
}

export function getAllEnumValues() {
    return Object.values(Procesador);
  }
  
  export function getProcesadorDescription(procesador: any) {
    switch (procesador) {
      case '-':
        return '-';

      case 'i7':
        return 'i7';
  
      case 'i5':
        return 'i5';

      case 'i3':
        return 'i3';
        
      default:
          return null;
    }
  }