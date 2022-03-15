import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useThemes from 'root/hooks/useThemes';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from 'root/components/TextInput';
import OnboardingSocials from 'root/components/OnboardingSocials';
import Button from 'root/components/Button';
import OnboardingTab from 'root/components/OnboardingTab';

export default function Login({ navigation }) {
  const {
    themes: { colors },
  } = useThemes();
  const stylesWithTheme = styles(colors);

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Please enter a valid email')
        .required('Please enter a valid email'),
      password: yup.string().required('Please enter your password'),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      email: 'test@gmail.com',
      password: '123',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('email');
    register('password');
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    navigation.replace('CompleteRegistration');
  };

  return (
    <View style={stylesWithTheme.container}>
      <OnboardingTab navigation={navigation} active="Login" />
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
          <Text style={stylesWithTheme.forgotPassword}>Forgot password?</Text>
        </View>

        <View>
          <Button text="Log In" onPress={handleSubmit(onSubmit)} />
          <Text style={stylesWithTheme.connectText}>or connect with</Text>
          <OnboardingSocials />
        </View>
      </View>
    </View>
  );
}

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#010A13',
    },
    forgotPassword: {
      color: colors.white,
      textAlign: 'right',
      opacity: 0.5,
    },
    pageContent: {
      flex: 2,
      backgroundColor: '#010A13',
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

Login.propTypes = {
  navigation: PropTypes.object,
};
