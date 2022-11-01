import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { width } from '../../utils';

class Notification extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Notification</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.exexlight_gray,
  },
});

export default Notification;
