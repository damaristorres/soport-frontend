export enum Status {
  ACTIVA = "Activo",
  INACTIVA = 'Inactivo',
  DEBAJA = 'De baja',
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

    case 'De baja':
      return 'De baja';

    default:
      return null;
  }
}
