import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p200'
})
export class P200Pipe implements PipeTransform {

  transform( value: string ): any {
    if(value.length > 200){
      let par = value.substr(0,197);
      par += "...";
      return par;
    }
    else{
      return value
    }
  }
}
