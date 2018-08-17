// tslint:disable
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomValueAccessor } from './custom-value-accessor';
import { MakeProvider } from './custom-value-accessor';

@Component({
	selector: 'combo-box',
	templateUrl: 'combo-box.component.html',
	styleUrls: ['combo-box.component.less'],
	providers: [MakeProvider(ComboBoxComponent)]
})

export class ComboBoxComponent extends CustomValueAccessor {
	@Input() options: Object[];

	@Input('render') propertyToDisplay: string;

	@Input('disabled') isDisabled: boolean;

	@Input() allowNullOption: string;

	@Input() canAdd: boolean;

	@Input() placeholder: string = '';

	@Output() callback: EventEmitter<Object> = new EventEmitter();

	placeholderString: string = '';

	displayString: string;

	touched: boolean;

	_model: Object;

	get model(): Object {
		return this._model;
	}

	set model(newModel: Object) {
		if (!newModel) {
			this._model = newModel;
			return;
		}
		this._model = newModel;

		this.displayString = this.propertyToDisplay !== undefined ? this._model[this.propertyToDisplay] : this._model;

		this.onChange(this._model);
		this.callback.emit(this._model);
	}

	ngOnInit(): void {
		this.placeholderString = this.placeholder ? this.placeholder : '';
	}

	selectOption(option: Object): void {
		if (this.isDisabled) {
			return;
		}

		this.model = option;
	}

	addOption(): void {
		if (this.isDisabled) {
			return;
		}

		this.model = this.displayString;
	}

	setNull(): void {
		if (this.allowNullOption) {

		}
	}

	clearInput(): void {
		if (this.isDisabled) {
			return;
		}

		this.touched = true;

		if (this.displayString) {
			this.placeholderString = this.displayString;
		}
		this.displayString = '';
	}
}
