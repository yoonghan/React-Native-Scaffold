import React from 'react';
import { ErrorText } from '../../../src/components/ErrorText';
import { Label } from '../../../src/components/Label';

interface Props {}

export const ErrorType: React.SFC<Props> = (props) => <ErrorText>Sample Of Error</ErrorText>
export const LabelType:React.SFC<Props> = (props) => <Label text={'Sample Of Label'}/>
