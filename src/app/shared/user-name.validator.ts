import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn{
  return (control: AbstractControl) : {[key:string]: any } | null => {
    const forbidden = forbiddenName.test(control.value); //pattern match
    return forbidden ? { 'forbiddenName':  { value : control.value}}: null;
  };
}

export function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      // if control is empty return no error
      return null;
    }

    // test the value of the control against the regexp supplied
    const valid = regex.test(control.value);

    // if true, return no error (no error), else return error passed in the second parameter
    return valid ? null : error;
  };
}



