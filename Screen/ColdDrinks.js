import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../Theme/Styles/MenuPage-style';
const ColdDrinks = props => {
  return (
    <>
      <View></View>
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Coca Cola'},
            {key: 'Pepsi'},
            {key: 'Thumbs Up'},
            {key: 'Amul Lassi'},
            {key: 'Sprite'},
            {key: 'Fenta'},
            {key: 'Maaza'},
            {key: '7UP'},
            {key: 'Amul Cool'},
            {key: 'Slice'},
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

export default ColdDrinks;
