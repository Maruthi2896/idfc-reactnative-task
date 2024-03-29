import { StyleSheet, Text, View } from "react-native";
import Task from "../components/Tasks";
export default function Page() {
  return (
    <View style={styles.container}>
      {/* IDFC Task */}
      <Task />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
});
