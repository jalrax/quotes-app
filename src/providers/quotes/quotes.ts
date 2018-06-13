import { Injectable } from '@angular/core';

import { IQuote } from '../../data/quote.interface';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {

  private favoriteQuotes: IQuote[] = [];

  addQuotesToFavorite(quote: IQuote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes, 'log');
  }

  removeQuotesToFavorite(quote: IQuote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: IQuote) => {
      return quoteEl.id === quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

}
