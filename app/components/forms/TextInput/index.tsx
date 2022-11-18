import React from 'react';
import { Text, View, TextInput as TextInputRN } from 'react-native';
import { styles } from './styles';

interface ITextInput {
  onChangeText: () => void;
  value: string;
  placeholder: string;
  keyboardType: string;
  autoCapitalize?: string;
}

export function TextInput({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  autoCapitalize = 'none',
}: ITextInputStyled) {
  return (
    <TextInputRN
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  );
}
