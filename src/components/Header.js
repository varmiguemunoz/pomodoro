import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

const Header = ({currentTime, setCurrentTime, time}) => {

    const handlePress = (index) => {
        const newTime = index === 0 ? 25: index === 1? 5 : 0
    }

  return (
    <View style={styles.container}>
      {options.map((items, index) => (
        <TouchableOpacity key={index} style={styles.itemStyle}>
          <Text>{items}</Text>
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
  },
});

export default Header;
