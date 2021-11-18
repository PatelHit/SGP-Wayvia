import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../Theme/Styles/MenuPage-style';
const SouthIndian = props => {
  return (
    <>
      <View></View>
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Plane Dosa'},
            {key: 'Idli'},
            {key: 'Uttapam'},
            {key: 'Mendu Wada'},
            {key: 'Masala Dosa'},
            {key: 'Pongal'},
            {key: 'Rasam'},
            {key: 'Murukku'},
            {key: 'Coconut Rice'},
            {key: 'Coconut Chatni'},
          ]}
          renderItem={({item}) => (
            <View style={styles.individualItems}>
              <Text style={styles.itemName}>{item.key}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default SouthIndian;
