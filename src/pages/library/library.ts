import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IQuoteGroup } from '../../data/quoteGroup.interface';
import quotes from '../../data/quotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection: IQuoteGroup[];
  quotesPage = 'QuotesPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public ngOnInit(): void {
    this.quoteCollection = quotes;
  }

}
