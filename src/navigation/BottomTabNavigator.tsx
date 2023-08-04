import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faSearch,
  faComment,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Home from '@screens/Home';
import Search from '@screens/Search';
import Chat from '@screens/Chat';
import Profile from '@screens/Profile';
import CreationDetails from '@screens/CreationDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let icon;
          switch (route.name) {
            case 'HomeTab':
              icon = faHome;
              break;
            case 'SearchTab':
              icon = faSearch;
              break;
            case 'ChatTab':
              icon = faComment;
              break;
            case 'ProfileTab':
              icon = faUser;
              break;
            default:
              icon = faHome;
          }
          return <FontAwesomeIcon icon={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#38BBB1', // Primary light green for the selected tab
        tabBarInactiveTintColor: '#707070', // Dark gray for unselected tabs
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="SearchTab" component={Search} />
      <Tab.Screen name="ChatTab" component={Chat} />
      <Tab.Screen name="ProfileTab" component={Profile} />
    </Tab.Navigator>
  );
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Details" component={CreationDetails} />
    </Stack.Navigator>
  );
};

export default BottomTabNavigator;
