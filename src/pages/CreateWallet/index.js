import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from 'root/components/TextInput';
import PropTypes from 'prop-types';
import { Text2, HeadingFour, Text3, Text1 } from 'root/styles/typography';
import Button from 'root/components/Button';
import useThemes from 'root/hooks/useThemes';
import PageHeader from 'root/components/PageHeader';

export default function CreateWallet() {
  const {
    themes: { colors },
  } = useThemes();

  const schema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter a valid email'),
    password: yup.string().required('Please enter your password'),
    cPassword: yup
      .string()
      .required('Passwords must match')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      email: 'j@d.c',
      password: '123',
      cPassword: '123',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('email');
    register('password');
    register('cPassword');
  }, []);

  const onSubmit = (data) => {
    // console.log(data);
    navigation.navigate('Wallet');
  };

  const stylesWithTheme = styles(colors);

  return (
    <View style={stylesWithTheme.container}>
      <PageHeader
        title="Create new wallet"
        alignHeading="center"
        onBack={() => ''}
        headingTextMarginBottom={16}
      />

      <Text3 style={stylesWithTheme.desc} variant="fadeWhite" align="center">
        DrameBase does not manage nor maintain your wallet. Wallet creation functionality here is
        for your convenience only and DrameBase never knows its sensitive data like private key or
        password.
      </Text3>

      <View style={stylesWithTheme.formArea}>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Email"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.email}
              />
            )}
            name="email"
          />
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Password"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry
                error={errors.password}
              />
            )}
            name="password"
          />
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Confirm Password"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry
                error={errors.cPassword}
              />
            )}
            name="cPassword"
          />
        </View>
      </View>
      <View style={stylesWithTheme.buttonContainer}>
        <Button text="Create" onPress={handleSubmit(onSubmit)} />
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
    desc: {
      marginBottom: 36,
    },
    buttonContainer: {
      marginTop: 40,
    },
  });

CreateWallet.propTypes = {
  navigation: PropTypes.object,
};
