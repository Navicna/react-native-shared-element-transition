import React from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { Images } from "../../constants/Images";
import { Dot } from "./Dot";
import { RoundedView } from "./RoundedView";

export const bgColor = "#EFEFEF";

const sneakersType = ["All", "Running", "Sneakers", "Formal", "Casual"];

const Header = () => (
  <View
    style={{
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      width: Dimensions.get("window").width - 32,
      marginBottom: 32,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <RoundedView>
        <Image source={Images.menuIcon} />
      </RoundedView>
      <Image style={{ marginLeft: 16 }} source={Images.nikeIcon} />
    </View>
    <RoundedView>
      <Image source={Images.cartBag} />
    </RoundedView>
  </View>
);

export function ShowRoomHeader() {
  return (
    <View
      style={{
        paddingTop: 16,
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Header />
      <View
        style={{
          height: 150,
          width: Dimensions.get("window").width - 32,
          backgroundColor: bgColor,
          justifyContent: "center",
          marginHorizontal: 16,
          borderRadius: 18,
        }}
      >
        <Image
          source={Images.sneakers.green}
          style={{ position: "absolute", right: -24 }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 16 }}>
          20% Disocunt
        </Text>
        <Text style={{ fontSize: 14, marginLeft: 16 }}>
          on your first purchase
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 18,
            marginHorizontal: 16,
            width: 100,
            marginTop: 16,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Shop now
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Dot selected={index === 0} />
          ))}
      </View>
      <FlatList
        data={sneakersType}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: label, index }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: index === 0 ? "black" : "transparent",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 18,
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                color: index === 0 ? "white" : "#9C9C9C",
                fontWeight: "bold",
              }}
            >
              {label}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
