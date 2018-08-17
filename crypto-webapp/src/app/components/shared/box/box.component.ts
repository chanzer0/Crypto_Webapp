import { Component, Input } from '@angular/core';

@Component({
	selector: 'lmr-box',
	templateUrl: 'box.component.html',
	styleUrls: ['box.component.less']
})

export class BoxComponent {
	@Input() title: string;
}
