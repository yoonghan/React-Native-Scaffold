import React from 'react';
import { ChartContainer } from '../../../src/components/ChartContainer';

interface Props {}

const chartItems = [
  {  x: new Date(1536600019148), open: 200, close: 300, high: 350, low: 155},
  {  x: new Date(1546600019148), open: 300, close: 298, high: 355, low: 255},
  {  x: new Date(1556600019148), open: 300, close: 258, high: 355, low: 255},
  {  x: new Date(1566600019148), open: 300, close: 298, high: 355, low: 255},
  {  x: new Date(1576600019148), open: 300, close: 258, high: 355, low: 255}
];

export const Chart: React.SFC<Props> = (props) => <ChartContainer  items={chartItems} cryptType={'BTC'}  lastUpdatedDate={new Date()}/>

export default Chart;
