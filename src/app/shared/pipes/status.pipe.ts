import { Pipe, PipeTransform } from '@angular/core';
import { Status } from 'src/app/@core/domain/enums/status.enums';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: Status): string {
    switch (value) {
      case 'I':
        return 'Inactivo';
      case 'A':
        return 'Activo';
      default:
        return 'null';
    }
  }
}
