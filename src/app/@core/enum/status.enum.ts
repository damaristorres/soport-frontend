export enum Status {
    ACTIVO = "A",
    INACTIVO = "I"
}

export function getAllEnumValues() {
    return Object.values(Status);
  }
  
  export function getStatus(status: any) {
    switch (status) {
      case 'A':
        return 'Activo';
  
      case 'I':
        return 'Inactivo';
        
      default:
          return null;
    }
  }