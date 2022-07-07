import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Flex = () => {
  return (
      <SafeAreaView style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, backgroundColor: "blue" }} />
        <View style={{ flex: 2, backgroundColor: "yellow" }} />
        <View style={{ flex: 1, backgroundColor: "tomato" }} />
        <View style={{ flex: 1, backgroundColor:"tan"}}>
          <Text> Hey flex </Text>
        </View>

        <StatusBar/>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
