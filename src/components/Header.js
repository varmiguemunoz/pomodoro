import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

const Header = ({ currentTime, setCurrentTime, setTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View style={styles.container}>
      {options.map((items, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
          onPress={() => handlePress(index)}
        >
          <Text style={{ fontWeight: "bold" }}>{items}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemStyle: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
    borderColor: "white",
    borderRadius: 10,
    marginVertical: 20,
    alignItems: "center",
  },
});

export default Header;
