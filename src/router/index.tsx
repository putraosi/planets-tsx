import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ComingSoon, Details, Planet, Wishlist} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRoute] = useState('Planet');

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Planet"
        component={Planet}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
