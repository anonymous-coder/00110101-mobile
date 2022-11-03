import { StyleSheet } from 'react-native';
import { height, width } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    height: height * 0.32,
    width,
    backgroundColor: '#eee',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
