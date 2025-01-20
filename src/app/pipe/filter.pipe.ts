import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value:any, args?: any):any{
    if(!value) return [];

    if (!args) return value;
    // console.log(value);
    args=args.toLowerCase();
    // console.log(args);

    return value.filter((students:any)=>{
      return JSON.stringify(students).toLowerCase().includes(args);

    })
  }
}
