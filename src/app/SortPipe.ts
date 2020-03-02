import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortpipe'})
export class SortPipe implements PipeTransform {
    transform(values : any [], type : string){
        if(type == 'asc'){
            return values.sort();
        }

        if(type == 'desc'){
            return values.sort().reverse();
        }
    }
}