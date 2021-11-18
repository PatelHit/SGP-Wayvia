import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../Theme/Styles/MenuPage-style';
const IceCream = props => {
  return (
    <>
      <View></View>
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Butter Scotch'},
            {key: 'Cookie N Cream'},
            {key: 'Vanila'},
            {key: 'Chocobar'},
            {key: 'Raasbari'},
            {key: 'Raaj bhog'},
            {key: 'American Nuts'},
            {key: 'Afgani nuts'},
            {key: 'Golden Pearl'},
            {key: 'ZooluBar'},
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

export default IceCream;
