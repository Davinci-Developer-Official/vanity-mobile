import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title:"security",headerShown:false}}/>
    <Stack.Screen name="sign-in" options={{title:"sign-in",headerShown:false}} />
    <Stack.Screen name="sign-up" options={{title:"sign-up",headerShown:false}}/>
    <Stack.Screen name="home" options={{title:"home",headerShown:false}} />
    <Stack.Screen name="add-owner" options={{title:"add-owner",headerShown:false}}/>
    <Stack.Screen name="owners" options={{title:"owners",headerShown:false}}/>
    <Stack.Screen name="add-business" options={{title:"add-business",headerShown:false}}/>
    <Stack.Screen name="business" options={{title:"business",headerShown:false}}/>
    <Stack.Screen name="settings" options={{title:"settings",headerShown:false}}/>
    <Stack.Screen name="info" options={{title:"info",headerShown:false}}/>
  </Stack>;
}
