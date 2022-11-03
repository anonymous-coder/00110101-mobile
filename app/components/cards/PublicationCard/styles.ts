import { StyleSheet } from 'react-native';
import { width } from '../../../utils';

export const styles = StyleSheet.create({
  item: {
    marginTop: 4,
    marginBottom: 4,
  },
  titleCntr: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
  },
  title: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    color: '#111111',
  },
  descriptionCntr: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#191919',
  },
  image: {
    width: width,
    height: 240,
  },
});
