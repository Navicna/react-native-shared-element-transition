import React from "react";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import * as Animatable from "react-native-animatable";
import { Images } from "../../constants/Images";
import { RoundedView } from "../components/RoundedView";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

const sizes = ["UK 36", "UK 37", "UK 38", "UK 39", "UK 30"];

const animation = {
  0: { opacity: 0, translateY: 100 },
  1: { opacity: 1, translateY: 0 },
};

const animation2 = {
  0: { opacity: 0, translateY: -100 },
  1: { opacity: 1, translateY: 0 },
};

export default function SneakerDetailsScreen({
  route,
  navigation,
}: {
  route: RouteProp<ParamListBase> & {
    params: {
      sneaker: any;
    };
  };
  navigation: NavigationProp<ParamListBase>;
}) {
  const goBack = navigation.goBack;
  const sneaker = route.params?.sneaker;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 16 + 30,
        backgroundColor: "white",
        alignContent: "center",
      }}
    >
      <View
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Pressable onPress={goBack}>
          <RoundedView>
            <Image
              source={Images.arrowRight}
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </RoundedView>
        </Pressable>
        <Animatable.Text
          useNativeDriver={true}
          animation={animation}
          duration={1000}
          style={{ textAlign: "center", fontWeight: "bold", fontSize: 22 }}
        >
          {sneaker.name}
        </Animatable.Text>

        <RoundedView>
          <Image source={Images.cartBag} />
        </RoundedView>
      </View>

      <Animatable.View
        useNativeDriver={true}
        animation={animation}
        duration={1000}
      >
        <Image
          source={Images.nikeBg}
          style={{
            position: "absolute",
            left: Dimensions.get("window").width / 2.6,
            top: 40,
            zIndex: -1,
          }}
        />
      </Animatable.View>
      <SharedElement id={`item.${sneaker.id}.image`}>
        <Image
          source={sneaker.image}
          style={{
            position: "absolute",
            left: 35,
            height: 300,
            width: 300,
            zIndex: 10,
            top: 60,
          }}
          resizeMode="contain"
        />
      </SharedElement>

      <Animatable.View
        useNativeDriver={true}
        animation={animation}
        duration={1000}
        style={{ marginLeft: 16, position: "absolute", top: 140 }}
      >
        <Text style={{ fontWeight: "bold" }}>Size</Text>
        {sizes.map((size) => (
          <RoundedView style={{ marginVertical: 8, width: 50 }}>
            <Text>{size}</Text>
          </RoundedView>
        ))}
        <Animatable.Text
          useNativeDriver={true}
          animation={animation}
          duration={1000}
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 60,
            fontWeight: "bold",
          }}
        >
          {sneaker.price}
        </Animatable.Text>
      </Animatable.View>

      <View
        style={{
          width: 120,
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: 140,
        }}
      >
        <Image source={Images.nikeBox} />
      </View>
      <Animatable.View
        useNativeDriver={true}
        animation={animation2}
        duration={1000}
        style={{
          width: 120,
          alignItems: "center",
          position: "absolute",
          bottom: Dimensions.get("window").height / 3.5,
          right: 0,
        }}
      >
        <Text style={{ fontWeight: "bold", marginVertical: 16 }}>Colour</Text>
        {sneaker.colors.map((color: string) => (
          <RoundedView style={{ marginVertical: 4 }}>
            <View
              style={{
                height: 14,
                width: 14,
                backgroundColor: color,
              }}
            />
          </RoundedView>
        ))}
      </Animatable.View>
    </View>
  );
}

SneakerDetailsScreen.sharedElements = (
  route: any,
  otherNavigation: any,
  showing: any
) => {
  const { sneaker } = route.params;

  return [
    {
      id: `item.${sneaker.id}.image`,
    },
    {
      id: `item.${sneaker.id}.text`,
    },
  ];
};
