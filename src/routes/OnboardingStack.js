import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'root/pages/Login';
import SignupScreen from 'root/pages/Signup';
import VerifyEmailScreen from 'root/pages/VerifyEmail';
import CompleteRegistrationScreen from 'root/pages/CompleteRegistration';
import SetUpWalletScreen from 'root/pages/SetUpWallet';
import CreateWalletScreen from 'root/pages/CreateWallet';
import WalletScreen from 'root/pages/Wallet';
import BackIcon from 'root/assets/icons/back.png';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Wallet"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{ width: 20, height: 20 }} source={BackIcon} />
          </TouchableOpacity>
        ),
        headerShown: false,
      })}
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Signup' }} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} options={{ title: '' }} />
      <Stack.Screen
        name="CompleteRegistration"
        component={CompleteRegistrationScreen}
        options={{ title: '' }}
      />
      <Stack.Screen name="SetUpWallet" component={SetUpWalletScreen} options={{ title: '' }} />
      <Stack.Screen name="CreateWallet" component={CreateWalletScreen} options={{ title: '' }} />
      <Stack.Screen name="Wallet" component={WalletScreen} options={{ title: '' }} />
    </Stack.Navigator>
  );
}
