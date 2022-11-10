import { StyleSheet } from 'react-native';
import { width, height } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '##fafafa',
  },
  form: {
    height: '68%',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 48,
    width: width,
    marginLeft: 10,
    paddingLeft: 10,

    borderLeftWidth: 15,
    borderLeftColor: '#111',
    backgroundColor: '#fff',
  },
  titleView: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  title: {
    fontFamily: 'Helvetica',
    fontWeight: '900',
    fontSize: 36,
  },
  bottom: {
    height: '32%',
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#111',
  },
});
