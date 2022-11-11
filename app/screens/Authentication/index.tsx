import React from 'react';
import { useMachine } from '@xstate/react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import AuthenticationMachine from './machine.xstate.ts';
import AuthenticationEmailScreen from './email';
import AuthenticationCodeScreen from './code';
// import CodeSentScreen from './code-sent';
// import AfterAuthenticationScreen from './code-sent';
import { styles } from './styles';

export default function AuthenticationScreen() {
  const [state, send, service] = useMachine(AuthenticationMachine);

  return (
    <SafeAreaView style={styles.container}>
      {state.matches('enterEmail') ? <AuthenticationEmailScreen /> : null}
      {state.matches('code') ? <AuthenticationCodeScreen /> : null}
    </SafeAreaView>
  );
}
// {/* {state.matches('code-sent') ? <CodeSentScreen /> : null} */}

// {/* {state.matches('after-authentication') ? <CodeSentScreen /> : null} */}
