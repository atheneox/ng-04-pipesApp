
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'flying'
})
export class flyingPipe implements PipeTransform {
    transform(flying: boolean = false): string {
        return flying ? 'vuela' : 'no vuela';
    }
}