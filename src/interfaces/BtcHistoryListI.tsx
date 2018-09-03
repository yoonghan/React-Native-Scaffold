export interface BtcHistoryItemI {
  x: Date;
  open: number;
  close: number;
  high: number;
  low: number;
}

export interface BtcHistoryI {
  items: Array<BtcHistoryItemI>;
  cryptType: string;
  lastUpdatedDate: Date;
  error: string;
}
