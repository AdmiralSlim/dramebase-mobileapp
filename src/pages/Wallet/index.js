import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text2, Text3, Text1, Text4 } from 'root/styles/typography';
import Button from 'root/components/Button';
import useThemes from 'root/hooks/useThemes';
import PageHeader from 'root/components/PageHeader';
import CopyImg from 'root/assets/icons/copy.png';

export default function Wallet({ navigation }) {
  const {
    themes: { colors },
  } = useThemes();
  const stylesWithTheme = styles(colors);
  return (
    <View style={stylesWithTheme.container}>
      <PageHeader title="Wallet" onBack={() => ''} headingTextMarginBottom={24} />

      <View style={stylesWithTheme.walletContainer}>
        <View style={stylesWithTheme.userStyle}>
          <Text2>Slimhourglass@gmail.com</Text2>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text3 variant="fadeWhite">Axdihdmkwoedjhbnks.seoehosnas</Text3>
            <Image source={CopyImg} style={{ width: 8.5, height: 8.5, marginLeft: 6 }} />
          </View>
        </View>
        <View style={stylesWithTheme.balanceStyle}>
          <Text2>0 DRBS</Text2>
          <Text3>0 ELF</Text3>
        </View>
      </View>

      <View style={stylesWithTheme.buttonContainer}>
        <Button text="Go to home" />
      </View>
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
    walletContainer: {
      borderRadius: 10,
      height: 116,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.darkGrey,
      paddingHorizontal: 12,
      paddingVertical: 17,
      marginBottom: 140,
    },
    buttonContainer: {
      marginBottom: 0,
    },
  });

Wallet.propTypes = {
  navigation: PropTypes.object,
};
