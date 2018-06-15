import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private settingsProvider: SettingsProvider) {
  }

  onToggle($event: Toggle) {
    this.settingsProvider.setBackground($event.checked);
  }

  checkAltBackground() {
    return this.settingsProvider.isAltBackground();
  }
}
