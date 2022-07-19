export enum Status {
  ACTIVA = 'Activo',
  INACTIVA = 'Inactivo',
}

export function getAllEnumValues() {
  return Object.values(Status);
}

export function getStatusDescription(value: Status) {
  switch (value) {
    case 'Activo':
      return 'Activa';

    case 'Inactivo':
      return 'Inactiva';

    default:
      return null;
  }
}
