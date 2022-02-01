import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './container/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from './enums/icons';
import Messages from './container/Messages';
import Profile from './container/Profile';
import styled from 'styled-components/native';
import {QueryClient, QueryClientProvider} from 'react-query';

const ContainerIcon = styled.View`
  background-color: ${(props: any) => (props.focus ? '#f4f4f4' : '#fff')};
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 21px;
`;

const queryClient = new QueryClient();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: props => {
              // You can return any component that you like here!
              return (
                <ContainerIcon focus={props.focused}>
                  {icons[route.name.toUpperCase()]({
                    fill: props.color,
                  })}
                </ContainerIcon>
              );
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#F65E7E',
            tabBarInactiveTintColor: '#99A3B0',
          })}>
          <Tab.Screen name="Shape" component={Home} />
          <Tab.Screen name="Message" component={Messages} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
