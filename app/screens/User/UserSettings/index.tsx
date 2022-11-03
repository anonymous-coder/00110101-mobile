import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function UserSettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>User Settings</Text>
      </View>
    </SafeAreaView>
  );
}
