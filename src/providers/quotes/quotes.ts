import { Injectable } from '@angular/core';

import { IQuote } from '../../data/quote.interface';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {

  private favouriteQuotes: IQuote[] = [];

  addQuoteToFavourite(quote: IQuote) {
    this.favouriteQuotes.push(quote);
  }

  removeQuoteFromFavourite(quote: IQuote) {
    const position = this.favouriteQuotes.findIndex((quoteEl: IQuote) => {
      return quoteEl.id === quote.id;
    });
    this.favouriteQuotes.splice(position, 1);
  }

  getFavouriteQuotes() {
    return this.favouriteQuotes.slice();
  }

  isQuoteFavourite(quote: IQuote) {
    return this.favouriteQuotes.find((quoteEl: IQuote) => {
      return quoteEl.id === quote.id;
    });
  }
}
