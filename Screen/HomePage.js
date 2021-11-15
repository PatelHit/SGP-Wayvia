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
      <View style={styles.mainMenu}>
        data=
        {[
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
        renderItem=
        {({item}) => (
          <View style={styles.individualItems}>
            <Text style={styles.itemName}>{item.key}</Text>
          </View>
        )}
        {/* /> */}
      </View>
      <View style={{margin: 5, flex: 1}}>
        <Image
          source={require('../assets/images/slim_Banner.png')}
          style={styles.bottomBanner}
          resizeMode={'stretch'}
        />
      </View>
    </View>
  );
};

export default HomePage;
