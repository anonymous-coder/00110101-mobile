import React from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { styles } from './styles';

export default function AuthenticationScreen() {
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
          placeholder="josephine@example.com"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.bottom}></View>
    </SafeAreaView>
  );
}
