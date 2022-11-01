import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { width } from "../../utils";

class Search extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>Search</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.exexlight_gray
  },
});

export default Search;