import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  @Input() isDark = false;

  @HostBinding('class') get themeMode() {
    console.log('aqui')
    return this.isDark ? 'dark-theme' : 'light-theme';
  }
}