import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Colors from '../Theme/Colors';

const LoginScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image
          source={require('../assets/images/logo2.png')}
          style={{width: '80%'}}
          resizeMode={'contain'}
        />
        <View style={{width: '100%', alignItems: 'center'}}>
          <Text
            style={{
              color: Colors.secondary,
              fontSize: 23,
              fontWeight: 'bold',
              marginBottom: 15,
            }}>
            Log In
          </Text>
          <View style={{width: '100%'}}>
            <View style={{width: '100%'}}>
              <TextInput
                placeholder="Phone"
                style={{
                  borderWidth: 1.5,
                  borderColor: Colors.secondary,
                  borderRadius: 10,
                  fontWeight: '600',
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  width: '100%',
                  marginVertical: 15,
                }}
              />
            </View>
            <View>
              <TextInput
                placeholder="Password"
                style={{
                  borderWidth: 1.5,
                  borderColor: Colors.secondary,
                  borderRadius: 10,
                  fontWeight: '600',
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  width: '100%',
                  marginVertical: 15,
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: Colors.primary,
                paddingVertical: 10,
                borderRadius: 10,
                marginVertical: 15,
                borderWidth: 1.5,
                borderColor: Colors.secondary,
              }}
              onPress={() => props.navigation.navigate('HomePage')}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.white,
                  fontWeight: '500',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <TouchableOpacity>
                <Text style={{fontWeight: '500'}}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 30}}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={{fontWeight: '500', color: Colors.primary}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
