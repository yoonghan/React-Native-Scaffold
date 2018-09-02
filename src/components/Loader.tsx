import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {}

export const Loader: React.SFC<Props> = (props) => {
 return <Text style={styles.mango}>Loading...</Text>;
}

const styles = StyleSheet.create({
  mango: {
    textAlign: 'center',
    fontSize: 30
  }
});
