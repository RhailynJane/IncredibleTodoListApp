import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const FirstAppComponent = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Lab Assignment 1: Spinning Up React Native App
        </Text>
        <Image source={require("../assets/images/favicon.png")} />

        <Text style={styles.section}>React Native Project Setup Guide</Text>
        <Text>1. Node.js v16 or later</Text>
        <Text>2. Install Yarn with: npm install --global yarn</Text>
        <Text>3. Create app: npx create-expo-app@latest</Text>
        <Text>4. Start app: yarn start or npm run start</Text>
        <Text>5. Reset (optional): yarn reset-project</Text>

        <Text style={styles.section}>Running on Android Emulator</Text>
        <Text>Open AVD from Android Studio</Text>
        <Text>Press `a` in the terminal to launch</Text>

        <Text style={styles.section}>Troubleshooting</Text>
        <Text>Emulator not detected → Start AVD first</Text>
        <Text>App stuck → Restart with yarn start</Text>

        <Text style={styles.section}>Resources</Text>
        <Text>https://docs.expo.dev/</Text>
        <Text>https://reactnative.dev/docs/environment-setup</Text>
      </View>
    </ScrollView>
  );
};

export default FirstAppComponent;

const styles = StyleSheet.create({
  scroll: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "600",
  },
});
