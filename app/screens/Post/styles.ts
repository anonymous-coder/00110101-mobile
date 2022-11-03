import { StyleSheet } from 'react-native';
import { height, width } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textArea: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: height * 0.6,
    width,
    backgroundColor: '#fff',
  },
  placeholder: {
    color: '#ccc',
    fontSize: 24,
  },
  menu: {
    height: height * 0.4,
    width,
    backgroundColor: '#e5e5e5',
  },
});
