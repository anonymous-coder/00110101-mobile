import { StyleSheet } from 'react-native';
import { width, height } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: height - 60,
    width: width,
  },
  sidebar: {
    height: height,
    width: width * 0.32 * 0.32,
  },
  sidebarWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bar: {
    height: '100%',
    width: 5,
    backgroundColor: '#c4c4c4',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: height - 60,
    width: width - 50,
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width,
    // borderLeftWidth: 10,
    borderLeftBackgroundColor: '#111',
  },
  errorLabelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width,
    marginTop: 50,
    // borderLeftWidth: 10,
    borderLeftBackgroundColor: '#111',
  },
  errorLabel: {
    fontSize: 24,
    color: 'red',
    fontFamily: 'Roboto-Regular',
  },
  inputBar: {
    height: 50,
    width: 20,
    backgroundColor: '#111',
  },
  errorInputBar: {
    height: 50,
    width: 20,
    backgroundColor: 'red',
  },
  inputBarSpace: {
    width: 10,
  },
  textInput: {
    height: 50,
    width: width - 250,
    fontSize: 24,
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: height * 0.328,
  },
  label: {
    fontSize: 36,
    color: '#111',
    fontFamily: 'Inter-Black',
  },
  topSpace: {
    height: 100,
  },
});
