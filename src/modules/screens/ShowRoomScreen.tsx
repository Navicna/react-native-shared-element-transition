import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import { sneakers } from "../../data";

import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ShowRoomHeader } from "../components/ShowRoomHeader";
import { ShowRoomItem } from "../components/ShowRoomItem";

export default function ShowRoomScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <FlatList
        style={{ backgroundColor: "white" }}
        data={sneakers}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ShowRoomHeader />}
        renderItem={({ item: sneaker }) => {
          return <ShowRoomItem sneaker={sneaker} navigation={navigation} />;
        }}
      />
    </SafeAreaView>
  );
}
