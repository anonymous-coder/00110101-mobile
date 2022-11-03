import { Text, View, Image } from 'react-native';
import { styles } from './styles';

const PublicationHeader = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./newyorktimes-logo.png')} />
      <Text style={styles.title}>The New York Times</Text>
    </View>
  );
};

export default PublicationHeader;
