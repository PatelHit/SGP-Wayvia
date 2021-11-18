import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../Theme/Styles/HomePage-styles';

const HomePage = props => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('../assets/images/Main_Photo1.png')}
          style={styles.mainPhoto}
          resizeMode={'stretch'}
        />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SouthIndian')}>
        <View style={styles.individualMenuButtons}>
          <Text style={styles.individualMenuText}>South Indian</Text>
          <View>
            {/* <Image
                source={require('../assets/images/southIndian.png')}
                style={{
                  height: 90,
                  width: 100,
                  // margin: 5,
                  // marginLeft: 200,
                }}
                resizeMode={'stretch'}
              /> */}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('MainCourse')}>
        <View style={styles.individualMenuButtons}>
          <Text style={styles.individualMenuText}>Main Course</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('IceCream')}>
        <View style={styles.individualMenuButtons}>
          <Text style={styles.individualMenuText}>Ice Creams</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('ColdDrinks')}>
        <View style={styles.individualMenuButtons}>
          <Text style={styles.individualMenuText}>Cold Drinks</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
