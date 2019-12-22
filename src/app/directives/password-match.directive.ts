import {Attribute, Directive} from '@angular/core';
import {NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: 'input[match]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true
    }
  ]
})
export class PasswordMatchDirective implements Validator {
  constructor(@Attribute('match') public comparer: string) {
  }

  validate(c): { [key: string]: any } {
    const e = c.root.get(this.comparer);
    if (e && c.value !== e.value) {
      return {compare: true};
    }
    return null;
  }
}
