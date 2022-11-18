import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useMachine } from '@xstate/react';
import AuthFormMachine from '../xstate/machine.xstate.ts';
import { TextBtn, TextInputTerminal, TextInput } from '../../../components';
import { styles } from './styles';

function SideBar() {
  return (
    <View style={styles.sidebar}>
      <View style={styles.sidebarWrapper}>
        <View style={styles.bar} />
      </View>
    </View>
  );
}

function Label() {
  return (
    <View style={styles.labelWrapper}>
      <View style={styles.inputBarWrapper}>
        <View style={styles.inputBar} />
      </View>

      <View style={styles.inputBarSpace} />

      <View style={styles.labelWrapper}>
        <Text style={styles.label}>ENTER TO EMAIL</Text>
      </View>

    </View>
  );
}

function Input({
  value,
  onChangeText
}) {
  return (
    <View style={styles.labelWrapper}>
      <View style={styles.inputBarWrapper}>
        <View style={styles.inputBar} />
      </View>

      <View style={styles.inputBarSpace} />

      <View style={styles.labelWrapper}>
        <TextInput 
          onChangeText={onChangeText}
        value={value}
          style={styles.textInput} 
          placeholder="rachel@00110101.com"
          keyboardType="email-address"
          />
      </View>

    </View>
  );
}

function Form({value, onChangeText, placeholder}) {
  return (
    <View style={styles.form}>
      <View style={styles.top}>
      <Label />
      <Input onChangeText={onChangeText} value={value} placeholder={placeholder}/>
      </View>
    </View>
  );
}

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
      <SideBar />

      <Form 
        onChangeText={(text) => onChangeEmail(text)} 
        value={email}
        placeholder={'rachel@example.com'}
        />
    </SafeAreaView>
  );
}

