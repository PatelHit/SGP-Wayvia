import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainPhoto: {
    padding: 100,
    marginRight: 5,
    //margin: 5,
    marginBottom: 10,
    marginTop: 5,

    width: 392,
    height: 200,
    borderRadius: 7,
  },
  mainMenu: {
    borderColor: 'black',
    margin: 10,
    //  flex: 1,
  },
  individualMenuButtons: {
    marginBottom: 10,
    // marginLeft: 0.5,
    marginLeft: 8,
    // // marginRight: 8,

    borderColor: 'black',
    // borderWidth: 1,
    borderRadius: 7,
    height: 100,
    width: 377,
    backgroundColor: 'orange',
  },
  individualMenuText: {
    marginTop: 35,
    fontSize: 20,
    paddingLeft: 10,
  },
  bottomBanner: {
    borderRadius: 7,
    marginLeft: 4,
    height: 80,
    width: 396,
  },
});

export default styles;
