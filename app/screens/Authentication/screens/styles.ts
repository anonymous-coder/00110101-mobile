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
    height: height - 60,
    width: 50,
  },
  sidebarWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    height: '100%',
    width: 10,
    backgroundColor: 'black',
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
    height: 100,
  },
  inputBarWrapper: {
    position: 'relative',
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: 50,
    width: 15,
    backgroundColor: '#111',
  },
  inputBar: {
    height: 50,
    width: 20,
    backgroundColor: '#111',
  },
  inputBarSpace: {
    width: 10,
  },
  textInput: {
    height: 50,
    width: width - 100,
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
});

// import { StyleSheet } from 'react-native';
// import { width, height } from '../../../utils';

// export const styles = StyleSheet.create({
//   container: {
//     height: height * 0.328,
//     width: width,

//     backgroundColor: '#fafafa',
//     borderBottomLWidth: 2,
//     borderBottomColor: 'green',
//   },
//   form: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',

//     backgroundColor: '#fafafa',
//   },
//   loadingText: {
//     fontFamily: 'JetBrainsMono-Regular',
//     color: 'yellow',
//   },
//   errorText: {
//     fontFamily: 'JetBrainsMono-Regular',
//     color: 'red',
//   },
// });
