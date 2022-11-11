import React from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { useMachine } from '@xstate/react';
import AuthenticationMachine from './machine.xstate.ts';
import { styles } from './styles';

export default function AuthenticationEmailScreen() {
  const [state, send, service] = useMachine(AuthenticationMachine);
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  function onChangeEmail(text) {
    setEmail(text);
  }

  const checkEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://mywebsite.com/endpoint/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.titleView}>
          <Text style={styles.title}>ENTER EMAIL</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="josephine@00110101.com"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.bottom}>
        {state.matches('enterEmail') ? (
          <Text style={styles.loadingText}>processing, awaiting server response...</Text>
        ) : null}
        {state.matches('enterEmail') ? (
          <Text style={styles.errorText}>
            error, must be a valid email. Nothing i can do with what you've entered
          </Text>
        ) : null}
        {state.matches('enterEmail') ? (
          <Text style={styles.submitText}>
            valid email, to submit, press anywhere in terminal to continue (black area is the
            terminal)
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}