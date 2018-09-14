/**
 * Created for code referral on Redux middleware call
 */

import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {fetchData} from '../ducks/SampleFetch';

const SampleFetch: React.SFC<Props> = (props) => {
  _onPressButton = () => props.dispatch(fetchData())

  return (
    <View style={styles.capsicum}>
      <TouchableOpacity onPress={_onPressButton}>
        <Text>This is a basic Redux using Redux middleware, without the HOC complexity.</Text>
      </TouchableOpacity>
    </View>);
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SampleFetch);

const styles = StyleSheet.create({
  capsicum: {
    flex: 2,
    flexDirection: 'column'
  }
});
