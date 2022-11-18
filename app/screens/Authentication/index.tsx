import React from 'react';
import { useMachine } from '@xstate/react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import AuthFormMachine from './xstate/machine.xstate.ts';
import {
  EmailScreen,
  // AuthTokenSentScreen,
  AuthTokenScreen,
  AfterAuthenticationScreen,
} from './screens';
import { styles } from './styles';

export default function AuthenticationScreen() {
  const [state, send, service] = useMachine(AuthFormMachine);

  return (
    <SafeAreaView style={styles.container}>
      {state.matches('enteringEmail') ? <EmailScreen /> : null}
      {state.matches('enteringAuthToken') ? <AuthTokenSentScreen /> : null}
      {state.matches('after-authentication') ? <AfterAuthenticationScreen /> : null}
    </SafeAreaView>
  );
}
