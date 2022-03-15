import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ErrorMessage } from 'root/styles/typography';
import PropTypes from 'prop-types';
import useThemes from 'root/hooks/useThemes';
import ShowEyeIcon from 'root/assets/icons/show-eye.png';

export default function TextInputComponent({
  name,
  error,
  placeholder,
  onChangeText,
  onBlur,
  value,
  autoFocus,
  secureTextEntry,
}) {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setShowPassword(secureTextEntry);
  }, []);

  const {
    themes: { colors },
  } = useThemes();
  const styleWithThemes = styles(colors);

  return (
    <View style={styleWithThemes.textInputContainer}>
      <View style={styleWithThemes.inputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          autoFocus
          style={styleWithThemes.inputStyle}
          placeholderTextColor={colors.fadeWhite}
          secureTextEntry={showPassword}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={ShowEyeIcon} style={styleWithThemes.eyeIcon} />
          </TouchableOpacity>
        )}
      </View>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </View>
  );
}

const styles = (colors) =>
  StyleSheet.create({
    textInputContainer: {
      marginBottom: 16,
    },
    inputContainer: {
      borderBottomColor: colors.fadeWhite2,
      borderBottomWidth: 1,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputStyle: {
      color: colors.white,
      flex: 9,
    },
    eyeIcon: {
      height: 12,
      width: 18,
    },
  });

TextInputComponent.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};
