import { Pipe, PipeTransform } from '@angular/core';
import { Status } from 'src/app/@core/domain/enums/status.enums';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: Status): string {
    switch (value) {
      case Status.INACTIVA:
        return 'Inactiva';
      case Status.ACTIVA:
        return 'Activa';
      default:
        return 'null';
    }
  }
}
