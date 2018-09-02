import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  text:String
}

export const Label: React.SFC<Props> = (props) => {
 return(
   <Text style={styles.watermelon}>{props.text}</Text>
 );
}

const styles = StyleSheet.create({
  watermelon: {
    fontSize: 20,
    padding: 5
  }
});
