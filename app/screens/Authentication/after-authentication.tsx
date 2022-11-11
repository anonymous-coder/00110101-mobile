import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function AfterAuthenticationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>AfterAuthentication</Text>
      </View>
    </SafeAreaView>
  );
}
