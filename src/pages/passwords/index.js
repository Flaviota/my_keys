import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Passwords() {
  return (
    <SafeAreaView style={{flex:1, }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
