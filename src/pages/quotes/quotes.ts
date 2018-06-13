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
    private alertController: AlertController,
    private quotesProvider: QuotesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }


  onAddToFavorite(selectedQuote: IQuote) {
    const alert = this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        {
          text: 'Ok, go ahead',
          handler: () => {
            this.quotesProvider.addQuotesToFavorite(selectedQuote);
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
}
