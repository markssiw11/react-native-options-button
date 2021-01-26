import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import BgEffect from './BgEffect';

const dimensions = Dimensions.get('window');

function Main({count = 15, typeEffect}) {
  return (
    <View
      style={[
        styles.container,
        {width: dimensions.width, height: dimensions.height},
      ]}>
      {new Array(count).fill(true).map((_, i) => (
        <BgEffect key={i} scene={dimensions} typeEffect={typeEffect} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
export default Main;