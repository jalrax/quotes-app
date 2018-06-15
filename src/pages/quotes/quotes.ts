import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { IQuote } from '../../data/quote.interface';
import { IQuoteGroup } from '../../data/quoteGroup.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: IQuoteGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesProvider: QuotesProvider) {
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }


  onAddToFavourites(selectedQuote: IQuote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        {
          text: 'Ok, go ahead',
          handler: () => {
            this.quotesProvider.addQuoteToFavourite(selectedQuote);
          }
        },
        {
          text: 'No, I\'ve changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavourites(quote: IQuote) {
    this.quotesProvider.removeQuoteFromFavourite(quote);
  }

  isFavourite(quote: IQuote) {
    return this.quotesProvider.isQuoteFavourite(quote);
  }
}
