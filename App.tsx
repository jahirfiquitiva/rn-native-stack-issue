import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, HomeScreen, SettingsScreen} from './src/screens';
import {Provider, Text} from 'react-native-paper';
import CustomNavigationBar from './src/custom-appbar';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <Text>Right</Text>,
        }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="HomeStack" component={HomeStackScreen} />
          <Tab.Screen name="SettingsStack" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
