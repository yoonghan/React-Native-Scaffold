import React from 'react';
import { PriceScrollItemContainer } from '../../../src/components/PriceScrollItemContainer';

interface Props {}

const priceListing = [
  {price:200, fromExchange:'BTC', toCurrency:'USD'},
  {price:200, fromExchange:'BTC', toCurrency:'EUR'}
];

export const PriceListing: React.SFC<Props> = (props) => <PriceScrollItemContainer items={priceListing} itemClicked={function(input){console.log(input)}}/>

export default PriceListing;
