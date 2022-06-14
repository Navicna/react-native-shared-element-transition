import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createStackNavigator } from "react-navigation-stack";
import ShowRoomScreen from "../modules/screens/ShowRoomScreen";
import SneakerDetailsScreen from "../modules/screens/SneakerDetailsScreen";

import { NavigationContainer } from "@react-navigation/native";

const StackSharedElements = createSharedElementStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <SharedStack />
    </NavigationContainer>
  );
}

function SharedStack() {
  return (
    <StackSharedElements.Navigator>
      <StackSharedElements.Screen
        name="Root"
        component={ShowRoomScreen}
        options={{ headerShown: false }}
      />
      <StackSharedElements.Screen
        name="Details"
        component={SneakerDetailsScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}
      />
    </StackSharedElements.Navigator>
  );
}

// const Stack = createStackNavigator();

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Root"
//         options={{ headerShown: false }}
//         component={SharedStack}
//       />
//     </Stack.Navigator>
//   );
// }
