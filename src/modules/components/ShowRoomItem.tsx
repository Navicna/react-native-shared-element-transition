import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Images } from "../../constants/Images";

import { RoundedView } from "./RoundedView";

const bgColor = "#EFEFEF";

export function ShowRoomItem({
  sneaker,
  navigation,
}: {
  sneaker: any;
  navigation: NavigationProp<ParamListBase>;
}) {
  return (
    <Pressable onPress={() => navigation.navigate("Details", { sneaker })}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          height: 220,
          width: Dimensions.get("window").width / 2 - 24,
          borderRadius: 18,
          marginLeft: 16,
          marginVertical: 16,
          backgroundColor: bgColor,
        }}
      >
        <RoundedView
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
            height: 24,
            width: 24,
          }}
        >
          <Image source={Images.arrowRight} />
        </RoundedView>
        <SharedElement id={`item.${sneaker.id}.image`}>
          <Image
            source={sneaker.image}
            resizeMode="contain"
            style={{
              height: 180,
              width: 160,
              marginBottom: 48,
            }}
          />
        </SharedElement>
        <View
          style={{
            alignItems: "flex-start",
            backgroundColor: "transparent",
            position: "absolute",
            bottom: 24,
            left: 24,
          }}
        >
          <SharedElement id="text">
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {sneaker.name}
            </Text>
          </SharedElement>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            {sneaker.price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
