import { View, Text, Image } from 'react-native';
import React from 'react';

const Profile = ({ route }) => {

  const { profiledata, name } = route.params;
  return (
    <View>
      <Image style={{width:100 , height:100}} source={{uri :`${profiledata.result[0].titlePhoto}`}}></Image>
      <Text>Profile Screen name {profiledata.result[0].rank}</Text>
    </View >
  );
};

export default Profile;
