import React from "react";
import { View } from "react-native";

export const Dot = ({ selected }: { selected: boolean }) => (
  <View
    style={{
      height: 7,
      width: 7,
      borderRadius: 7 / 2,
      backgroundColor: selected ? "black" : "#C4C4C4",
      marginHorizontal: 7,
      marginVertical: 16,
    }}
  />
);
