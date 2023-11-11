import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { useState } from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import Button from "./src/components/Button";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [work, setWork] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("Pomo" | "Short" | "Long");
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={styles.view}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          setCurrentTime={setCurrentTime}
          currentTime={currentTime}
          setTime={setTime}
        />
        <Timer
          time={time}
          setTime={setTime}
          active={isActive}
          setIsActive={setIsActive}
          setWork={setWork}
          work={work}
        />
        <Button active={isActive} setActice={setIsActive} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  view: {
    paddingTop: Platform.OS === "android" && 30,
    paddingHorizontal: 15,
    flex: 1,
  },
});
