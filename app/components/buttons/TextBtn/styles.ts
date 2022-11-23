import { StyleSheet } from 'react-native';
import { width } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

    width: width,
    marginTop: 10,
    paddingRight: 50,
  },
  label: {
    fontFamily: 'Helvetica',
    fontWeight: '900',
    fontSize: 36,
    letterSpacing: -1.2,
  },
});
