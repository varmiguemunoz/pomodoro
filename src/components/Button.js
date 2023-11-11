import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const Button = ({ active, setActice }) => {


  const handleStart = () => {
    playSound();
    setActice(!active);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/pillow-hit.mp3")
    );
    await sound.playAsync();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleStart}>
      <Text style={styles.text}>{active ? "STOP" : "START"}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
  },

  container: {
    backgroundColor: "#3333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});
