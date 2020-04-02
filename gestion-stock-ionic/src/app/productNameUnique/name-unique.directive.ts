import { ProductService } from './../services/product.service';
import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[appNameUnique]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: NameUniqueDirective, multi: true}]
})
export class NameUniqueDirective {
 @Input()
 idCommand: number;

  constructor(private productService: ProductService) { }

  public validate(control: AbstractControl): Promise<ValidationErrors | number> | Observable<ValidationErrors | null> {
    const val = control.value;
    
    return (this.productService.productNameExists(this.idCommand, val) as Observable<any>)
        .pipe(map((exists: boolean) => {
            if (exists) {
                return {['prodcutName']: true};
            } else {
                return null;
            }
        }));
}

}
