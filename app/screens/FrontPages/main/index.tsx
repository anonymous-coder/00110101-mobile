import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import PublicationCard from '../../../components/cards/PublicationCard/index.tsx';
import { styles } from './styles';
import { DATA } from './data';

function FrontPageMainScreen({ navigation }) {
  const renderItem = ({ item }) => {
    return <PublicationCard item={item} onPress={() => navigation.navigate('Article')} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
}

export default FrontPageMainScreen;
