import { Stack } from 'expo-router';

const CategoryLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ff0f35',
                },
                headerTintColor: '#ffff',
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name="category"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="agro"
                options={{
                    title: 'Agro, indústria e comércio',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="aliments"
                options={{
                    title: 'Alimentos e bebidas',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="art"
                options={{
                    title: 'Artes e Artesanato',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="party"
                options={{
                    title: 'Artigos de festa',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="audio"
                options={{
                    title: 'Áudio e vídeo',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="automotive"
                options={{
                    title: 'Automotivo',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="babies"
                options={{
                    title: 'Bebês e higiene infantil',
                    headerShown: true,
                }}
            />
        </Stack>
    );
};

export default CategoryLayout;