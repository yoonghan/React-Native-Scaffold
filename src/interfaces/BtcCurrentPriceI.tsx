export interface BtcCurrentPriceItemI {
  fromExchange: string;
  toCurrency: string;
  price: number;
}

export interface BtcCurrentPriceI {
  items: Array<BtcCurrentPriceItemI>;
  error: string;
}
