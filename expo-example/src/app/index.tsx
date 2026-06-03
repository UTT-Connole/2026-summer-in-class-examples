import { Text, View, StyleSheet, Pressable } from "react-native";
import {useState} from "react"
import { Link, useRouter } from 'expo-router';


export default function Index() {

  const [studentName, setStudentName]= useState("Corbin")

  const router = useRouter();


  let updateStudentName = () => {
    console.log(studentName)
    setStudentName("Joseph")
    console.log(studentName)
  }

  let logRat = (word) => {
    console.log("Rat")
    console.log(word)
    return () => console.log("Rattigan")
  }



  return (
    <View style={styles.container}>
      <Link href="/ratstar"> Go to Ratfirmations</Link>
      <Link href="/chocolate_chip"> Go to Chocolate Chip</Link>
      <Link href="/cookie_form"> Go to Cookie Form</Link>
      <Link href="/list_of_cookies"> Go to List of Cookies</Link>

      <Link href="/ratstar" asChild>
      <Pressable>
        <Text>Go to Ratfirmations</Text>
      </Pressable>
      </Link>

      <Text >Hello Class!</Text>
      <Text onPress={updateStudentName}>Click on Me!</Text>

      <Text onPress={logRat}>Rat1</Text>
      <Text onPress={logRat("Rat2")}>Rat2</Text>
      <Text onPress={() => logRat("Rat3")}>Rat3</Text>

      <Text>Hello {studentName}</Text>
      <Text onPress={() => router.push("/ratstar")}>Go to Ratfiramations</Text>
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
