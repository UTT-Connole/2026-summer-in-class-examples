import { Text, View, StyleSheet } from "react-native";

export default function Index() {

  let studentName = "Corbin"

  let updateStudentName = () => {
    console.log(studentName)
    studentName = "Joseph"
    console.log(studentName)
  }

  return (
    <View style={styles.container}>
      <Text>Hello Class!</Text>
      <Text onPress={updateStudentName}>Click on Me!</Text>
      <Text>Hello {studentName}</Text>
      <Text>Hello Class!</Text>
      <Text>Hello Class!</Text>
      <Text>Hello Class!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
