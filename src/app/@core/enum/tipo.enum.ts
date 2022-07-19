export enum Tipo {
    NOTEBOOK = "Notebook",
    COMPUTADORA = "PC"
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
        
      default:
          return null;
    }
  }