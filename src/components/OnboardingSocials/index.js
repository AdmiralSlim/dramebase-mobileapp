import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Linking } from 'react-native';
import GoogleLogo from 'root/assets/logos/google.png';
import IclouIcon from 'root/assets/logos/icloud.png';
import FacebookLogo from 'root/assets/logos/facebook.png';

export default function OnboardingSocials() {
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <Image source={GoogleLogo} style={styles.socialImg} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
        <Image source={FacebookLogo} style={styles.socialImg} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://apple.com')}>
        <Image source={IclouIcon} style={[styles.socialImg, { marginRight: 0 }]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialImg: {
    width: 30,
    height: 30,
    marginRight: 39,
  },
});
