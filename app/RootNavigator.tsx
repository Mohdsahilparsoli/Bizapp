import { useAppSelector } from "@/store/hooks";
import { Redirect, Stack } from "expo-router";

function RootNavigator() {
  const { user, loading } = useAppSelector((state) => state.auth);

  if (loading) return null;

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default RootNavigator;
