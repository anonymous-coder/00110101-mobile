import { StyleSheet } from 'react-native';
import { width } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,

    height: 'auto', // TODO take bottom safeview into account
    width: width,
    padding: 10,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#111',
  },
});
