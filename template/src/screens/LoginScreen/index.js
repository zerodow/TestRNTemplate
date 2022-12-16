import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  const _onPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TouchableOpacity style={styles.btn} onPress={_onPress}>
        <Text>TO LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'red',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
});
