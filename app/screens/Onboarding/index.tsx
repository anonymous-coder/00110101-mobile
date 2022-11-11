import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function AfterAuthenticationMessage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>After Authentication Message</Text>
      </View>
    </SafeAreaView>
  );
}
