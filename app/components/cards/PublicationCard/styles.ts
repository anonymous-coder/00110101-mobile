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
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionCntr: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
  },
  description: {
    fontSize: 16,
  },
  image: {
    width: width,
    height: 240,
  },
});
