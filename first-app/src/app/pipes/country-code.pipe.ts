import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value: string, code: string): unknown {
    if (code === "USA") return "+1" + value
    else return '+91 ' + value;
  }

}