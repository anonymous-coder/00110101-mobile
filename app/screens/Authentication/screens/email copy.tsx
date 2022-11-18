import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useMachine } from '@xstate/react';
import AuthFormMachine from '../xstate/machine.xstate.ts';
import { TextBtn, TextInputComponent, Terminal } from '../../../components';
import { styles } from './styles';

export function EmailScreen() {
  const [state, send, service] = useMachine(AuthFormMachine);
  const [email, setEmail] = React.useState('');

  function onChangeEmail(text: string) {
    setEmail(text);
  }

  function onSubmit(text) {
    send({ type: 'CONFIRM_EMAIL', email });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInputComponent
          label={state.matches('enteringEmail.idle') ? 'ENTER EMAIL' : 'INVALID EMAIL'}
          labelColor={false ? 'black' : 'red'}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          placeholder="rachel@00110101.com"
          keyboardType="email-address"
        />
        <TextBtn onPress={() => onSubmit()} label="submit" />
      </View>
    </SafeAreaView>
  );
}
