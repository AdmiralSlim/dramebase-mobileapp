import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { HeadingThree } from 'root/styles/typography';
import BackIcon from 'root/assets/icons/back-white.png';

export default function Button({ title, onBack, headingTextMarginBottom, alignHeading }) {
  const stylesWithTheme = styles(headingTextMarginBottom);
  return (
    <View>
      <TouchableOpacity onPress={onBack}>
        <Image source={BackIcon} style={stylesWithTheme.backStyle} />
      </TouchableOpacity>
      <HeadingThree style={stylesWithTheme.heading} align={alignHeading}>
        {title}
      </HeadingThree>
    </View>
  );
}

const styles = (headingTextMarginBottom) =>
  StyleSheet.create({
    backStyle: {
      width: 24,
      height: 24,
      marginBottom: 16,
    },
    heading: {
      marginBottom: headingTextMarginBottom || 28,
    },
  });

Button.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
  alignHeading: PropTypes.string,
};
