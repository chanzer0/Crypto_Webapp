import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Provider, forwardRef, Type } from '@angular/core';

export class CustomValueAccessor implements ControlValueAccessor {
	private disabled: boolean;

	protected _model: Object;

	get model(): Object {
		return this._model;
	}

	set model(model: Object) {
		this._model = model;
		this.onChange(model);
	}

	writeValue(obj: any): void {
		this.model = obj;
	}

	onChange = (_: any) => {};
	onTouched = () => {};

	registerOnChange(fn) {
		this.onChange = fn;
	}

	registerOnTouched(fn) {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}
}


export function MakeProvider(prop: Type<any>): Provider {
	return {
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => prop),
		multi: true
	};
}
