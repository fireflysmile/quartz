import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberstyle'
})
export class NumberstylePipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	if (this.isEmpty(value)) return null;

    return value.toString().replace(/(\d*\.)(\d*)/, '<span>$1</span><span class="decimal">$2</span>');
  }

  isEmpty(value: any) {
  	return value == null || value === '';
  }

}
