// tslint:disable
import {
	forwardRef,
	Inject,
	Directive,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ContentChild,
	NgZone,
	Renderer2,
	OnInit
} from '@angular/core';

import { DropdownConfig } from './dropdown-config';
import { Placement, PlacementArray, positionElements } from './positioning';

/**
 */
@Directive({
	selector: '[lmrDropdownMenu]',
	host: { '[class.dropdown-menu]': 'true',
			'[class.show]': 'dropdown.isOpen()',
			'[attr.x-placement]': 'placement' }
})
export class DropdownMenuDirective {
	placement: Placement = 'bottom';
	isOpen = false;

	constructor(
		@Inject(forwardRef(() => DropdownDirective)) public dropdown, private _elementRef: ElementRef,
		private _renderer: Renderer2) {}

	get children(): ElementRef[] {
		return this._elementRef.nativeElement.children;
	}

	isEventFrom($event) { return this._elementRef.nativeElement.contains($event.target); }

	position(triggerEl, placement) {
		this.applyPlacement(positionElements(triggerEl, this._elementRef.nativeElement, placement));
	}

	applyPlacement(_placement: Placement) {
		// remove the current placement classes
		this._renderer.removeClass(this._elementRef.nativeElement.parentNode, 'dropup');
		this._renderer.removeClass(this._elementRef.nativeElement.parentNode, 'dropdown');
		this.placement = _placement;
		/**
		 * apply the new placement
		 * in case of top use up-arrow or down-arrow otherwise
		 */
		if (_placement.search('^top') !== -1) {
			this._renderer.addClass(this._elementRef.nativeElement.parentNode, 'dropup');
		} else {
			this._renderer.addClass(this._elementRef.nativeElement.parentNode, 'dropdown');
		}
	}
}

/**
 * Marks an element to which dropdown menu will be anchored. This is a simple version
 * of the NgbDropdownToggle directive. It plays the same role as NgbDropdownToggle but
 * doesn't listen to click events to toggle dropdown menu thus enabling support for
 * events other than click.
 *
 * @since 1.1.0
 */
@Directive({
	selector: '[lmrDropdownAnchor]',
	host: { 'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()' }
})
export class DropdownAnchorDirective {
	anchorEl;

	constructor(@Inject(forwardRef(() => DropdownDirective)) public dropdown, private _elementRef: ElementRef) {
		this.anchorEl = _elementRef.nativeElement;
	}

	isEventFrom($event) { return this._elementRef.nativeElement.contains($event.target); }
}

/**
 * Allows the dropdown to be toggled via click. This directive is optional: you can use NgbDropdownAnchor as an
 * alternative.
 */
@Directive({
	selector: '[lmrDropdownToggle]',
	host: {
		'class': 'dropdown-toggle',
		'aria-haspopup': 'true',
		'[attr.aria-expanded]': 'dropdown.isOpen()',
		'(click)': 'toggleOpen()'
	},
	providers: [{ provide: DropdownAnchorDirective, useExisting: forwardRef(() => DropdownToggleDirective) }]
})
export class DropdownToggleDirective extends DropdownAnchorDirective {
	constructor(@Inject(forwardRef(() => DropdownDirective)) dropdown, elementRef: ElementRef) { super(dropdown, elementRef); }

	toggleOpen() { this.dropdown.toggle(); }
}

/**
 * Transforms a node into a dropdown.
 */
@Directive({
	selector: '[lmrDropdown]',
	exportAs: 'lmrDropdown',
	host: {
		'[class.show]': 'isOpen()',
		'(keyup.esc)': 'closeFromOutsideEsc()',
		'(keyup)': 'keyPress($event)',
		'(document:click)': 'closeFromClick($event)'
	}
})
export class DropdownDirective implements OnInit {
	private _zoneSubscription: any;

	@ContentChild(DropdownMenuDirective) private _menu: DropdownMenuDirective;

	@ContentChild(DropdownAnchorDirective) private _anchor: DropdownAnchorDirective;

	/**
	 * Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.
	 * When it is true (default) dropdowns are automatically closed on both outside and inside (menu) clicks.
	 * When it is false dropdowns are never automatically closed.
	 * When it is 'outside' dropdowns are automatically closed on outside clicks but not on menu clicks.
	 * When it is 'inside' dropdowns are automatically on menu clicks but not on outside clicks.
	 */
	@Input() autoClose: boolean | 'outside' | 'inside';

	/**
	 *  Defines whether or not the dropdown-menu is open initially.
	 */
	@Input('open') _open = false;

	/**
	 * Placement of a popover accepts:
	 *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
	 *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
	 * and array of above values.
	 */
	@Input() placement: PlacementArray;

	/**
	 *  An event fired when the dropdown is opened or closed.
	 *  Event's payload equals whether dropdown is open.
	 */
	@Output() openChange = new EventEmitter();

	/**
	 * Outputs index of focused element when user presses enter
	 */
	@Output() onEnter: EventEmitter<number> = new EventEmitter();

	constructor(config: DropdownConfig, ngZone: NgZone) {
		this.placement = config.placement;
		this.autoClose = config.autoClose;
		this._zoneSubscription = ngZone.onStable.subscribe(() => { this._positionMenu(); });
	}

	ngOnInit() {
		if (this._menu) {
			this._menu.applyPlacement(Array.isArray(this.placement) ? (this.placement[0]) : this.placement as Placement);
		}
	}

	/**
	 * Checks if the dropdown menu is open or not.
	 */
	isOpen(): boolean { return this._open; }

	/**
	 * Opens the dropdown menu of a given navbar or tabbed navigation.
	 */
	open(): void {
		if (!this._open) {
			this._open = true;
			this._positionMenu();
			this.openChange.emit(true);
		}
	}

	/**
	 * Closes the dropdown menu of a given navbar or tabbed navigation.
	 */
	close(): void {
		if (this._open) {
			this._open = false;
			this.openChange.emit(false);
		}
	}

	/**
	 * Toggles the dropdown menu of a given navbar or tabbed navigation.
	 */
	toggle(): void {
		if (this.isOpen()) {
			this.close();
		} else {
			this.open();
		}
	}

	keyPress($event: KeyboardEvent) {
		let key = $event.key;

		let focused = this._menu.children[0];

		switch (key) {
			case 'Enter':
				console.log('enter');
				break;
			case 'ArrowUp':
				console.log('arrow up');
				if (this.isOpen()) {
				} else {
					this.open();
				}
				break;
			case 'ArrowDown':
				console.log('arrow down');
				break;
			default: return;
		}
	}

	closeFromClick($event) {
		if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
			if (this.autoClose === true) {
				this.close();
			} else if (this.autoClose === 'inside' && this._isEventFromMenu($event)) {
				this.close();
			} else if (this.autoClose === 'outside' && !this._isEventFromMenu($event)) {
				this.close();
			}
		}
	}

	closeFromOutsideEsc() {
		if (this.autoClose) {
			this.close();
		}
	}

	ngOnDestroy() { this._zoneSubscription.unsubscribe(); }

	private _isEventFromToggle($event) { return this._anchor.isEventFrom($event); }

	private _isEventFromMenu($event) { return this._menu ? this._menu.isEventFrom($event) : false; }

	private _positionMenu() {
		if (this.isOpen() && this._menu) {
			this._menu.position(this._anchor.anchorEl, this.placement);
		}
	}
}