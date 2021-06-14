import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPercent'
})
export class PercentPipe implements PipeTransform {

  transform(value: {oldPrice:number,newPrice:number}, args?: any): any {
    return Math.floor(((value.oldPrice - value.newPrice ) / value.oldPrice ) * 100 )
  }

}
