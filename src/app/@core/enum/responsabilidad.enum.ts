export enum Responsabilidad {
  confirmada = 'Confirmada',
  sin_confirmar = 'Sin confirmar'
}

export function getAllEnumValues() {
  return Object.values(Responsabilidad);
}

export function getResponsabilidadDescription(responsabilidad: any) {
  switch (responsabilidad) {
    case 'Confirmada':
      return 'Confirmada';

    case 'Sin confirmar':
      return 'Sin confirmar';

    default:
        return null;
  }
}