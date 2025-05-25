import { View } from "react-native";
import FirstAppComponent from "@/component/FirstAppComponent";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FirstAppComponent />
    </View>
  );
}
