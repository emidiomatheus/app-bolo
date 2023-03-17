import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/screens/Home";
import { Shops } from "./src/screens/Shops";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Header } from "./src/components/Header";

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#E6790B',
                headerShown: false
            }}
        >
            <Tab.Screen
              name="Sortear"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Lojas"
              component={Shops}
              options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="shopping-bag" color={color} size={size} />
                )
              }}
            />
        </Tab.Navigator>
    )
}