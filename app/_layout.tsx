import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element {

    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}
