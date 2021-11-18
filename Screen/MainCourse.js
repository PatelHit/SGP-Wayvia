import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../Theme/Styles/MenuPage-style';
const MainCourse = props => {
  return (
    <>
      <View></View>
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Chapati'},
            {key: 'Naan'},
            {key: 'kulcha'},
            {key: 'Paratha'},
            {key: 'Veg Jaipuri'},
            {key: 'Paneer Bhurji'},
            {key: 'Shahi Paneer'},
            {key: 'Kaju Koya'},
            {key: 'Amritasari kofta'},
            {key: 'Chhole'},
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

export default MainCourse;
