import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={styles.conteb}>
      <Image
        source={require("../assets/idfc.png")}
        style={{ height: 300, width: 300 }}
      />
      <Text style={styles.text}>IDFC TODO TASK</Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  conteb: {
    flexDirection: "column",
    alignItems: "center",
  },
});
