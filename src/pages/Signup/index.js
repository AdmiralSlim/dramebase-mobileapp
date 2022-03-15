import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useThemes from 'root/hooks/useThemes';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from 'root/components/TextInput';
import Button from 'root/components/Button';
import OnboardingTab from 'root/components/OnboardingTab';

export default function Signup({ navigation }) {
  const {
    themes: { colors },
  } = useThemes();

  const stylesWithTheme = styles(colors);
  const schema = yup
    .object({
      username: yup.string().required('Please enter a username'),
      email: yup
        .string()
        .email('Please enter a valid email')
        .required('Please enter a valid email'),
      password: yup.string().required('Please enter your password'),
      cPassword: yup
        .string()
        .required('Passwords must match')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
      // dob: yup.string().required('Please select your dob'),
      // country: yup.string().required('Please select your country'),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      username: 'hilory',
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
    register('username');
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    navigation.replace('VerifyEmail');
  };

  return (
    <View style={stylesWithTheme.container}>
      <OnboardingTab navigation={navigation} active="Signup" />
      <View style={stylesWithTheme.pageContent}>
        <View style={stylesWithTheme.formArea}>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Username"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.username}
                />
              )}
              name="username"
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

        <View>
          <Button text="Sign Up" onPress={handleSubmit(onSubmit)} />
          <Text style={stylesWithTheme.connectText}>By signing up you have agreed to our</Text>
        </View>
      </View>
    </View>
  );
}

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    forgotPassword: {
      color: colors.white,
      textAlign: 'right',
      opacity: 0.5,
    },
    pageContent: {
      flex: 2,
      backgroundColor: colors.primary,
      justifyContent: 'space-between',
      paddingVertical: 90,
      paddingHorizontal: 26,
    },
    connectText: {
      fontSize: 13,
      lineHeight: 15,
      textAlign: 'center',
      color: colors.white,
      marginBottom: 33,
      opacity: 0.3,
    },
  });

Signup.propTypes = {
  navigation: PropTypes.object,
};
