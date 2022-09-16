
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalletter'
})
export class capitalLettersPipe implements PipeTransform {

    transform(value: string, inCapitalLetter: boolean = true): string {
        return inCapitalLetter === true ? value.toUpperCase() : value.toLowerCase();
    }


}