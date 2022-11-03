import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function PostFormScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textArea}>
          <Text style={styles.placeholder}>Add a title</Text>
        </View>
        <View style={styles.menu}></View>
      </View>
    </SafeAreaView>
  );
}
