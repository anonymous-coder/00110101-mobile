import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useMachine } from '@xstate/react';
import AuthFormMachine from '../xstate/machine.xstate.ts';
import { TextBtn, TextInputLabel, TextInput, Terminal } from '../../../components';
import { styles } from './styles';

export function AuthTokenScreen() {
  const [state, send, service] = useMachine(AuthFormMachine);
  const [authToken, setAuthToken] = React.useState('');

  function onChangeAuthToken(text: string) {
    setAuthToken(text);
  }

  function onSubmit(authToken) {
    send({ type: 'CONFIRM_AUTH_TOKEN', authToken: authToken });
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInputLabel label="ENTER CODE" />
        <TextInput
          onChangeText={(text) => onChangeAuthToken(text)}
          value={authToken}
          placeholder="55555"
          keyboardType="numeric"
        />
      </View>
      <TextBtn onPress={() => onSubmit()} label="submit" />
      <Terminal>
        {state.matches('enteringEmail') ? (
          <Text style={styles.loadingText}>processing, awaiting server response...</Text>
        ) : null}
        {state.matches('enterEmail') ? (
          <Text style={styles.errorText}>
            error, must be a valid email. Nothing i can do with what you've entered
          </Text>
        ) : null}
        {state.matches('enteringEmail') ? (
          <Text style={styles.submitText}>
            valid email, to submit, press anywhere in terminal to continue (black area is the
            terminal)
          </Text>
        ) : null}
      </Terminal>
    </SafeAreaView>
  );
}
