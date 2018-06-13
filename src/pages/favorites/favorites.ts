import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { IQuote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { QuotePage } from '../quote/quote';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: IQuote[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private quotesProvider: QuotesProvider,
    private modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.quotes = this.quotesProvider.getFavoriteQuotes();
  }

  onViewQuote(quote) {
    const modal = this.modalController.create(QuotePage);
    modal.present();
  }
}
