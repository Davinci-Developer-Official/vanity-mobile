import { Text, View , AppState,Alert } from "react-native";
import{useState,useRef, useEffect} from "react"
import Welcome from "@/components/welcome"
import WelcomeBack from "@/components/welcome-back";
 import AuthTest from "@/components/AuthTest";
import SignUp from "@/components/signUp"
import SignIn from "@/components/signIn"

export default function Index() {
  const[loggedIn,setLoggedIn]=useState(false)//false if not logged 
  const[user,setUser]=useState<string>("John Doe")

  const appState= useRef(AppState.currentState)
  
   const[currentState,setCurrentState]=useState(appState.current)
   useEffect(()=>{
    
    
      const subscription = AppState.addEventListener('change',(nextAppState)=>{
              if(appState.current.match(/inactive|background/)&&nextAppState==='active'){
                Alert.alert("App has come to foreground")
                console.log("App has come to foreground")
              }
              //update ref and state
              appState.current= nextAppState;
              setCurrentState(nextAppState)

      })
   
    
         return ()=> subscription.remove();

   
   },[])

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
       {/* {<AuthTest/>}  */}
       {/* {loggedIn?<SignIn/>:<SignUp/>} */}
      
    </View>
  );
}
