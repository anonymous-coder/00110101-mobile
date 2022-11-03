import { StyleSheet, StatusBar } from 'react-native';
import { width } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  content: {
    flex: 1,
    width: width,
    backgroundColor: '#fff',
  },
});
