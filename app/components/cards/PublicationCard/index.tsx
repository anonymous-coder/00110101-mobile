import { Text, Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const PublicationCard = ({ item, onPress, backgroundColor, textColor }) => {
  console.log('item', item.media);
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.titleCntr}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: 'https://static01.nyt.com/images/2022/11/01/world/01ukraine-briefing-header-1am/01ukraine-briefing-header-1am-moth.jpg',
        }}
      />
      <View style={styles.descriptionCntr}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PublicationCard;
