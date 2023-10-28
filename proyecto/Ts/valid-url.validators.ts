import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validUrlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const url = control.value;

    // Regular expression to match a valid URL format
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?)?$/;

    if (!urlPattern.test(url)) {
        console.log('invalid url');
      return { invalidUrl: true };
    }

    return null;
  };
}