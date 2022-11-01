import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const PublicationCard = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default PublicationCard;
