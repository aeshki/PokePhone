import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  DiscoveryScreen,
  SearchScreen,
  FavoriteScreen
} from './screens';

import BottomTabIcon from './components/common/Tab/BottomTabIcon';
import RocketIcon from './assets/icons/RocketIcon';
import StartIcon from './assets/icons/StartIcon';
import SearchIcon from './assets/icons/SearchIcon';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Discovery',
    component: DiscoveryScreen,
    icon: RocketIcon
  },
  {
    name: 'Search',
    component: SearchScreen,
    icon: SearchIcon
  },
  {
    name: 'Favorite',
    component: FavoriteScreen,
    icon: StartIcon
  }
];

export default function App() {
  const screenOptions = ({ route }) => ({
    tabBarStyle: {
      position: 'absolute',
      bottom: 15,
      left: 15,
      right: 15,
      borderRadius: 10,
      backgroundColor: '#e34b4b',
      elevation: 2,
      height: 70
    },
    tabBarShowLabel: false
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        {tabs.map((tab) => {
          return (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
              options={{
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#e34b4b',
                },
                tabBarIcon: ({ focused }) => {
                  return <BottomTabIcon
                    title={tab.name}
                    focused={focused}
                    component={tab.icon}
                  />
                }
              }}
            />
          )
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}