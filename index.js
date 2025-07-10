import { AppRegistry, Platform } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// Register the app
AppRegistry.registerComponent(appName, () => App);

// Run the app on web
if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("main");
  AppRegistry.runApplication(appName, { rootTag });
}
