import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'addpipe'})
export class AddPipe implements PipeTransform {
  nums : number= 0;
  transform(values: number[]){
    for(let num of values){
        this.nums= this.nums + num;
    }
    return this.nums;
  }
}