import * as React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import PublicationHeader from '../../components/header/PublicationHeader';
import { styles } from './styles';

export default function ArticleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Article</Text>
      </View>
    </SafeAreaView>
  );
}
