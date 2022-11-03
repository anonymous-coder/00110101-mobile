import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function DirectMessagesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Direct Messages</Text>
      </View>
    </SafeAreaView>
  );
}
