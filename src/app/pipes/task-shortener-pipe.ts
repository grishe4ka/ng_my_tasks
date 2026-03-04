import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskShortener',
})
export class TaskShortenerPipe implements PipeTransform {
  transform(value: string, maxlength: number = 50/*default value*/): string {
    if (!value) return '';
    return value.length > maxlength ? value.slice(0, maxlength) + '...' : value;
  }
}
