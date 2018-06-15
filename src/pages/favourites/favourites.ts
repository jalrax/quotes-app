import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { IQuote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { SettingsProvider } from '../../providers/settings/settings';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  quotes: IQuote[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private quotesProvider: QuotesProvider,
    private modalCtrl: ModalController,
    private settingsProvider: SettingsProvider) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesProvider.getFavouriteQuotes();
  }

  onViewQuote(quote) {
    const modal = this.modalCtrl.create('QuotePage', quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavourites(quote);
      }
    });
  }

  onRemoveFromFavourites(quote) {
    this.quotesProvider.removeQuoteFromFavourite(quote);
    const position = this.quotes.findIndex((quoteEl: IQuote) => {
      return quoteEl.id === quote.id;
    });
    if (position || position === 0) {
      this.quotes.splice(position, 1);
    }
  }

  getBackground() {
    return this.settingsProvider.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
