import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import PublicationCard from '../../components/cards/PublicationCard/index.tsx';
import { styles } from './styles';
import { DATA } from './data';

function FrontPageScreen() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#E5E4E2' : '#fff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <PublicationCard
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

export default FrontPageScreen;
