import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appSelectValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectFieldRequiredValidatorDirective,
      multi: true
    }
  ]
})
export class SelectFieldRequiredValidatorDirective implements Validator {
  @Input('appSelectValidator') defaultSelectedField: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log(this.defaultSelectedField);
    return control.value === this.defaultSelectedField ? {'defaultSelected': true} : null;
  }
}

