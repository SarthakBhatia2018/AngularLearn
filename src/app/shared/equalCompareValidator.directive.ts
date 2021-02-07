import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualCompareValidatorDirective, multi: true}]
})
export class EqualCompareValidatorDirective implements Validator {
  @Input() appConfirmEqualValidator: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value !== this.appConfirmEqualValidator ? {'mismatch': true} : null;
  }
}
