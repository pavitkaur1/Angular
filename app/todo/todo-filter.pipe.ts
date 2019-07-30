import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'itemFilter'})
export class TodoFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let searchFilter: string = args ? args.toLocaleLowerCase():null;
        return searchFilter ? value.filter(
            lst => lst.name.toLocaleLowerCase().startsWith(searchFilter) != false) :
            value;
    }
}