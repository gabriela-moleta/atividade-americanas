import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ff0f35",
                tabBarInactiveTintColor: "#ccc",
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="category"
                options={{
                    headerShown: false,
                    tabBarLabel: "Categorias",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="menu" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="basket"
                options={{
                    headerShown: false,
                    tabBarLabel: "Cesta",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shopping-basket" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    headerShown: false,
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="heart" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    headerShown: false,
                    tabBarLabel: "Conta",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-o" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default Layout;