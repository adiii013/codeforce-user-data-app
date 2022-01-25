import { View, Text } from 'react-native';
import React from 'react';

const Profile = ({route,navigation}) => {

  const {profile,name} = route.params;

  return (
    <View>
      <Text>Profile Screen name {name}</Text>
    </View>
  );
};

export default Profile;
