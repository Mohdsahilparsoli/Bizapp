import { useAppSelector } from "@/store/hooks";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user, loading } = useAppSelector((state) => state.auth);

  if (loading) return null;

  if (user) {
    return <Redirect href={"/(tabs)/home"} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
