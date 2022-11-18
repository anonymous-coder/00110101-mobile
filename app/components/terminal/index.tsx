import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface ITerminal {
  children: React.ReactNode;
}

export function Terminal({ children }) {
  return <View style={styles.container}>{children}</View>;
}
