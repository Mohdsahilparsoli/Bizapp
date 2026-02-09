import { RootState } from "@/store";
import { decrement, increment } from "@/store/slices/counterSlice";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

const profile = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state);
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        gap: "20px",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => dispatch(increment())}
        style={{
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: "#000",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>+</Text>
      </Pressable>
      <Text>{count.counter.value}</Text>
      <Pressable
        onPress={() => dispatch(decrement())}
        style={{
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: "#000",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>-</Text>
      </Pressable>
    </View>
  );
};

export default profile;
