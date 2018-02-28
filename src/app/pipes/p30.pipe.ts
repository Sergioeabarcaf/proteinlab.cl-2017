import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p30'
})
export class P30Pipe implements PipeTransform {

  transform(value: string): any {
    if(value.length > 30){
      let par = value.substr(0,28);
      par += "...";
      return par;
    }
    return value;
  }

}
