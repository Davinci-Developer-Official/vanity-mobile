import { Text, View } from "react-native";
import{useState} from "react"
import Welcome from "@/components/welcome"
import WelcomeBack from "@/components/welcome-back";

export default function Index() {
  const[loggedIn,setLoggedIn]=useState(true)
  const[user,setUser]=useState<string>("John Doe")

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      {loggedIn?<View><WelcomeBack user={user} /></View>:<View><Welcome/></View>}
    </View>
  );
}
