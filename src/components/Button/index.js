import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import useThemes from 'root/hooks/useThemes';
import { Text1 } from 'root/styles/typography';

export default function Button({ text, onPress, hollow, variant }) {
  const {
    themes: { colors },
  } = useThemes();
  const styleWithThemes = styles(colors, hollow, variant);

  return (
    <TouchableOpacity style={styleWithThemes.button()} onPress={onPress}>
      <Text1 weight="bold">{text}</Text1>
    </TouchableOpacity>
  );
}

const styles = (colors, hollow, variant) =>
  StyleSheet.create({
    button: () => ({
      ...(() => {
        switch (variant) {
          case 'primary':
            return {
              backgroundColor: hollow ? 'transparent' : colors.secondary,
              borderColor: colors.secondary,
            };
          case 'white':
            return {
              backgroundColor: hollow ? 'transparent' : colors.white,
              borderColor: colors.white,
            };
          default:
            return {
              backgroundColor: hollow ? 'transparent' : colors.secondary,
              borderColor: colors.secondary,
            };
        }
      })(),
      borderRadius: 25,
      marginBottom: 16,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    }),
  });

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  hollow: PropTypes.bool,
  variant: PropTypes.string,
};
