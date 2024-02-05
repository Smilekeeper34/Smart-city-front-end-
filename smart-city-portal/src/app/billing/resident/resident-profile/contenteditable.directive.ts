import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[contenteditable]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContenteditableDirective),
      multi: true
    }
  ]
})
export class ContenteditableDirective implements ControlValueAccessor {
  // The internal data model
  private innerValue: any = '';

  // Placeholders for the callbacks
  private onChange: (_: any) => void = () => {};
  private onTouched: () => void = () => {};

  // Get accessor
  get value(): any {
    return this.innerValue;
  }

  // Set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  // Set touched on blur
  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }

  // Set value on input
  @HostListener('input', ['$event.target'])
  onInput(target: HTMLInputElement) {
    this.value = target.innerHTML;
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    this.innerValue = value;
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', value);
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
