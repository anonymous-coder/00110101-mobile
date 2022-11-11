import React from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { useMachine } from '@xstate/react';
import AuthenticationMachine from './machine.xstate.ts';
import { styles } from './styles';

export default function AuthenticationCodeScreen() {
  const [state, send, service] = useMachine(AuthenticationMachine);
  const [code, setCode] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  function onChangeCode(text) {
    setCode(text);
  }

  const checkCode = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/check-code', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
        }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.titleView}>
          <Text style={styles.title}>ENTER CODE</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCode}
          value={Code}
          placeholder="josephine@example.com"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.bottom}>
        {state.matches('code') ? (
          <Text style={styles.loadingText}>processing, awaiting server response...</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
