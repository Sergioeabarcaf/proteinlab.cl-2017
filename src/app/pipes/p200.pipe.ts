import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p200'
})
export class P200Pipe implements PipeTransform {

  transform( value: string[] ): string {
    if(value[0].length > 200){
      let par = value[0].substr(0,197);
      par += "...";
      return par;
    }
    else{
      return value[0];
    }
  }
}
