import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {}

export const ErrorText: React.SFC<Props> = (props) => {
 return <Text style={styles.tomato}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  tomato: {
    color: '#FF0000'
  },
});
