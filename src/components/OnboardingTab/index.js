import React from 'react';
import { View, ImageBackground, Image, Pressable, Text, StyleSheet } from 'react-native';
import LoginBackground from 'root/assets/images/login-background.png';
import DramebaseLogo from 'root/assets/logos/dramebase-logo-white.png';

export default function OnboardingTab({ navigation, active }) {
  const stylesWithTheme = styles(active);
  return (
    <ImageBackground style={stylesWithTheme.pageBackground} source={LoginBackground}>
      <Image source={DramebaseLogo} style={stylesWithTheme.logoStyle} />
      <View style={stylesWithTheme.pageTab}>
        <Pressable
          style={[stylesWithTheme.tabItem, stylesWithTheme.signUp]}
          onPress={() => navigation.replace('Signup')}
        >
          <Text style={stylesWithTheme.signUpTextContent}>SIGN UP</Text>
        </Pressable>
        <Pressable
          style={[stylesWithTheme.tabItem, stylesWithTheme.login]}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={stylesWithTheme.loginTextContent}>Log In</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = (active) =>
  StyleSheet.create({
    pageBackground: {
      paddingTop: 40,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    pageTab: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    logoStyle: {
      width: 128,
      height: 51,
    },
    tabItem: {
      flex: 1,
      height: 53,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signUp: {
      backgroundColor: active === 'Signup' ? '#010A13' : 'transparent',
      borderTopRightRadius: 16,
    },
    login: {
      backgroundColor: active === 'Login' ? '#010A13' : 'transparent',
      borderTopLeftRadius: 16,
    },
    signUpTextContent: {
      fontSize: 14,
      lineHeight: 15,
      textAlign: 'center',
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: '#FFF',
      opacity: 0.6,
    },
    loginTextContent: {
      fontSize: 14,
      lineHeight: 15,
      textAlign: 'center',
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: '#FFFFFF',
    },
  });
