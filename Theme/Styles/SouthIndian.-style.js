import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 7,
    paddingTop: 60,
  },

  individualItems: {
    marginBottom: 10,
    borderColor: 'black',
    // borderWidth: 1,
    borderRadius: 7,
    height: 100,
    width: 392,
    backgroundColor: 'orange',
  },
  itemName: {
    textAlign: 'left',
    paddingTop: 30,
    fontSize: 30,
    paddingLeft: 10,
  },
});

export default styles;
