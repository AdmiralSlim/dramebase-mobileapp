import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import useThemes from 'root/hooks/useThemes';
import Button from 'root/components/Button';
import { Text2, HeadingThree } from 'root/styles/typography';
import MailIcon from 'root/assets/icons/mail-notification.png';
import PropTypes from 'prop-types';

export default function VerifyEmail({ navigation }) {
  const {
    themes: { colors },
  } = useThemes();
  const stylesWithTheme = styles(colors);
  return (
    <View style={stylesWithTheme.container}>
      <Image source={MailIcon} style={stylesWithTheme.mailIconStyle} />
      <HeadingThree style={stylesWithTheme.heading} align="center">
        Your account has been created
      </HeadingThree>
      <Text2 style={stylesWithTheme.desc} align="center">
        Kindly Check your email address to activate your account{' '}
      </Text2>
      <View style={stylesWithTheme.buttonContainer}>
        <Button text="Continue" onPress={() => navigation.replace('Login')} />
      </View>
    </View>
  );
}

const styles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      paddingHorizontal: 44,
      justifyContent: 'center',
      paddingBottom: '30%',
    },
    mailIconStyle: {
      width: 64,
      height: 64,
      alignSelf: 'center',
      marginBottom: 75,
    },
    heading: {
      marginBottom: 16,
    },
    desc: {
      marginBottom: 68,
      opacity: 0.9,
    },
    buttonContainer: {
      width: 239,
      alignSelf: 'center',
    },
  });

VerifyEmail.propTypes = {
  navigation: PropTypes.object,
};
