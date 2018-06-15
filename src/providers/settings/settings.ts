import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {
  private altBackground = false;

  setBackground(isAlt: boolean) {
    this.altBackground = isAlt;
  }

  isAltBackground() {
    return this.altBackground;
  }

}
