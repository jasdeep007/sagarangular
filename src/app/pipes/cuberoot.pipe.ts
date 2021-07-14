import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
@Pipe({
  name: 'cuberoot'
})
export class CuberootPipe implements PipeTransform {
  @memo()
  transform(value: number, ...args: number[]): number {
    console.log('pipe called');
    return value * value * value * args[0];
  }

}
