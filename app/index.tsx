import { Text, View } from "react-native";
import{useState} from "react"

export default function Index() {
  const[loggedIn,setLoggedIn]=useState(false)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {loggedIn?<View><Text>logged in</Text></View>:<View><Text>logged out</Text></View>}
    </View>
  );
}
