import { IQuote } from './quote.interface';

export interface IQuoteGroup {
  category: string,
  quotes: IQuote[],
  icon: string
}
