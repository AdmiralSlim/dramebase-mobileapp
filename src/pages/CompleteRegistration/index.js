import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text2, HeadingFour, Text3 } from 'root/styles/typography';
import Button from 'root/components/Button';
import useThemes from 'root/hooks/useThemes';
import PageHeader from 'root/components/PageHeader';
import Person1Image from 'root/assets/images/person-1.png';
import Person2Image from 'root/assets/images/person-2.png';
import Person3Image from 'root/assets/images/person-3.png';
import Person4Image from 'root/assets/images/person-4.png';
import Person5Image from 'root/assets/images/person-5.png';
import Person6Image from 'root/assets/images/person-6.png';
import Person7Image from 'root/assets/images/person-7.png';
import Person8Image from 'root/assets/images/person-8.png';
import ProfileImg from 'root/assets/images/profile.png';
import TickImg from 'root/assets/icons/tick-2.png';
import ImportImg from 'root/assets/icons/import.png';

export default function CompleteRegistration({ navigation }) {
  const {
    themes: { colors },
  } = useThemes();
  const [activeGenre, setActiveGenre] = useState([]);
  const [activeArtists, setActiveArtists] = useState([]);
  const genreList = [
    {
      name: 'Jazz',
      type: 'jazz',
    },
    {
      name: 'Reggae',
      type: 'reggae',
    },
    {
      name: 'Soul',
      type: 'soul',
    },
    {
      name: 'Blues',
      type: 'blues',
    },
    {
      name: 'RnB',
      type: 'rnb',
    },
    {
      name: 'Gospel',
      type: 'gospel',
    },
    {
      name: 'Pop',
      type: 'pop',
    },
    {
      name: 'Electric Metal',
      type: 'electric-metal',
    },
    {
      name: 'Hip-Hop',
      type: 'hip-hop',
    },
  ];

  const artistList = [
    {
      name: 'person-1',
      image: Person1Image,
    },
    {
      name: 'person-2',
      image: Person2Image,
    },
    {
      name: 'person-3',
      image: Person3Image,
    },
    {
      name: 'person-4',
      image: Person4Image,
    },
    {
      name: 'person-5',
      image: Person5Image,
    },
    {
      name: 'person-6',
      image: Person6Image,
    },
    {
      name: 'person-7',
      image: Person7Image,
    },
    {
      name: 'person-8',
      image: Person8Image,
    },
  ];

  const handleGenre = (genre) => {
    const i = activeGenre.indexOf(genre);
    if (i > -1) {
      const array = activeGenre;
      array.splice(i, 1);
      setActiveGenre([...array]);
    } else {
      setActiveGenre([...activeGenre, genre]);
    }
  };

  const handleArtist = (artist) => {
    const i = activeArtists.indexOf(artist);
    if (i > -1) {
      const array = activeArtists;
      array.splice(i, 1);
      setActiveArtists([...array]);
    } else {
      setActiveArtists([...activeArtists, artist]);
    }
  };

  const stylesWithTheme = styles(colors);
  return (
    <View style={stylesWithTheme.container}>
      <PageHeader title="Complete Registration" onBack={() => ''} />
      <View style={stylesWithTheme.profileStyle}>
        <Image source={ProfileImg} style={stylesWithTheme.profileImgStyle} />
        <View style={stylesWithTheme.uploadPicture}>
          <Image source={ImportImg} style={stylesWithTheme.importImgStyle} />
          <View style={stylesWithTheme.uploadTextContainer}>
            <Text2 style={stylesWithTheme.uploadText}>Upload profile picture</Text2>
          </View>
        </View>
      </View>

      <HeadingFour style={stylesWithTheme.subHeading}>Select Favorite genre of music</HeadingFour>
      <View style={stylesWithTheme.genreContainer}>
        {genreList.map(({ name, type }, index) => (
          <TouchableOpacity
            style={[
              stylesWithTheme.genreItem,
              {
                backgroundColor: activeGenre.includes(type) ? colors.lightBlue : 'transparent',
                borderColor: activeGenre.includes(type) ? colors.secondary : colors.fadeWhite,
                marginLeft: index % 3 === 0 ? 0 : '1%',
                marginRight: (index + 1) % 3 === 0 ? 0 : '1%',
              },
            ]}
            onPress={() => handleGenre(type)}
          >
            <Text3 variant="fadeWhite">{name}</Text3>
          </TouchableOpacity>
        ))}
      </View>

      <HeadingFour style={stylesWithTheme.subHeading}>Select Favorite artists</HeadingFour>
      <View style={stylesWithTheme.artistContainer}>
        {artistList.map(({ image, name }) => (
          <TouchableOpacity style={stylesWithTheme.artistItem} onPress={() => handleArtist(name)}>
            <Image source={image} style={stylesWithTheme.artistImg} />
            {activeArtists.includes(name) && (
              <Image source={TickImg} style={stylesWithTheme.tickStyle} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={stylesWithTheme.buttonContainer}>
        <Button text="Next" onPress={() => navigation.navigate('SetUpWallet')} />
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
    profileStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 29,
    },
    profileImgStyle: {
      width: 70,
      height: 70,
      borderRadius: 50,
      marginRight: 11,
    },
    uploadPicture: {
      flexDirection: 'row',
      alignItems: 'center',
      opacity: 0.6,
    },
    importImgStyle: {
      width: 16,
      height: 16,
      marginRight: 5,
    },
    uploadTextContainer: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255,255,255,.6)',
      alignSelf: 'flex-start',
    },
    uploadText: {
      marginBottom: -2,
    },
    subHeading: {
      marginBottom: 23,
    },
    genreContainer: {
      marginBottom: 30,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    genreItem: {
      width: '31.33%',
      height: 35,
      borderWidth: 1,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginRight: '1%',
      marginLeft: '1%',
    },
    artistContainer: {
      marginBottom: 51,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    artistItem: {
      width: '25%',
    },
    artistImg: {
      width: 70,
      height: 70,
      marginBottom: 14,
      alignSelf: 'center',
    },
    activeArtist: {
      position: 'relative',
    },
    tickStyle: {
      width: 18,
      height: 18,
      position: 'absolute',
      top: 2,
      right: 12,
    },
    buttonContainer: {
      marginBottom: 13,
    },
  });

CompleteRegistration.propTypes = {
  navigation: PropTypes.object,
};
