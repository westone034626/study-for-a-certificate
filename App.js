import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageUploader from './src/components/ImageUploader';

const RootStack = createStackNavigator();

const Home = ({ navigation }) => {
    const goToUpload = () => {
        navigation.navigate('Upload');
    };

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <StatusBar style="auto"/>
            <Pressable onPress={goToUpload}>
                <Text>
                    go to upload screen
                </Text>
            </Pressable>
        </View>
    );
};

const Profile = ({ navigation }) => {
    const goToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <StatusBar style="auto"/>
            <Pressable onPress={goToHome}>
                <Text>
                    go to home screen
                </Text>
            </Pressable>
        </View>
    );
};

const Upload = () => {

    return (
        <ImageUploader />
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                {/*<RootStack.Navigator screenOptions={{ headerShown: false }}>*/}
                <RootStack.Screen name={'Home'} component={Home}/>
                <RootStack.Screen name={'Profile'} component={Profile}/>
                <RootStack.Screen name={'Upload'} component={Upload}/>
            </RootStack.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
