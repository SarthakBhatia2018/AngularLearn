import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualCompareValidatorDirective, multi: true}]
})
export class EqualCompareValidatorDirective implements Validator {
  validate(formGroupControl: AbstractControl): { [key: string]: any } | null {
    const password = formGroupControl.get('password');
    const confirmPassword = formGroupControl.get('confirmpassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return {'mismatch': true};
    }
    return null;
  }
}
