import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
export declare class MaxDateValidator implements Validator, OnInit, OnChanges {
    maxDate: any;
    private validator;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
