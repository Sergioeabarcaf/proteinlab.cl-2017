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
      let dif = 200 - value.length;
      console.log(dif)
      for(let i=1; i<=dif; i++){
        value += " ";
      }
      console.log(value.length);
      return value;
    }
  }
}
