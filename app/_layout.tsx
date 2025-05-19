import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="sign-in" options={{title:"sign-in"}} />
    <Stack.Screen name="sign-up" options={{title:"sign-up"}}/>
    <Stack.Screen name="home" options={{title:"home"}} />
    <Stack.Screen name="owners" options={{title:"owners"}}/>
    <Stack.Screen name="business" options={{title:"business"}}/>
    <Stack.Screen name="settings" options={{title:"settings"}}/>
    <Stack.Screen name="info" options={{title:"info"}}/>
  </Stack>;
}
