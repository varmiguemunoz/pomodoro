import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";

const Timer = ({ time, setTime, active, setIsActive, setWork, work }) => {
  const formatedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    let interval = null;

    if (active) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time == 0) {
      playSound();
      setIsActive(false);
      setWork((prev) => !prev);
      setTime(work ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [active, time]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/game.mp3")
    );
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatedTime}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 15,
    flex: 0.3,
    justifyContent: "center",
  },

  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3333",
  },
});
