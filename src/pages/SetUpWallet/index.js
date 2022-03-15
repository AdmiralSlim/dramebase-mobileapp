import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text2, Text3, Text1 } from 'root/styles/typography';
import Button from 'root/components/Button';
import useThemes from 'root/hooks/useThemes';
import PageHeader from 'root/components/PageHeader';

export default function SetUpWallet({ navigation }) {
  const {
    themes: { colors },
  } = useThemes();
  const stylesWithTheme = styles(colors);
  return (
    <View style={stylesWithTheme.container}>
      <PageHeader title="Wallet" onBack={() => ''} headingTextMarginBottom={27} />

      <Text1 style={stylesWithTheme.subHeading} weight="medium">
        Set Up Wallet
      </Text1>
      <Text3 style={stylesWithTheme.desc} variant="fadeWhite">
        Import or create a new blockchain wallet from which you will pay a subsription for using
        DrameBase
      </Text3>
      <View style={stylesWithTheme.buttonContainer}>
        <Button text="Create new wallet" onPress={() => navigation.navigate('CreateWallet')} />
      </View>

      <Text2 variant="fadeWhite" align="center" style={{ marginBottom: 13 }}>
        Or
      </Text2>

      <View style={stylesWithTheme.buttonContainer}>
        <Button text="Import wallet" hollow />
      </View>

      <TouchableOpacity>
        <Text2 variant="fadeWhite" align="center">
          Set Up later
        </Text2>
      </TouchableOpacity>
    </View>
  );
}

const styles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 26,
    },
    subHeading: {
      marginBottom: 23,
    },
    desc: {
      marginBottom: 36,
    },
    buttonContainer: {
      marginBottom: 0,
    },
  });

SetUpWallet.propTypes = {
  navigation: PropTypes.object,
};
