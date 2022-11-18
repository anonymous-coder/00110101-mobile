import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export function AuthTokenSentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Auth Token Sent Screen</Text>
      </View>
    </SafeAreaView>
  );
}
