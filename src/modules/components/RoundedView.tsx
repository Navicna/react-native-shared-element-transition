import React from "react";
import { StyleSheetProperties, View } from "react-native";

export const RoundedView = ({
  style,
  children,
}: {
  style?: any;
  children: JSX.Element;
}) => (
  <View
    style={[
      {
        height: 34,
        width: 36,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderColor: "#374957",
        borderWidth: 0.5,
      },
      style,
    ]}
  >
    {children}
  </View>
);
