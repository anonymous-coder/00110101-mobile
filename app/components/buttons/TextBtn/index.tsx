import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './styles';

interface ITextBtn {
  label: string;
  onPress: () => void;
}

export function TextBtn({ label, onPress }: ITextBtn) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
