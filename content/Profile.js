import { View, Text, Image , StyleSheet } from 'react-native';
import React from 'react';

const Profile = ({ route }) => {

  const { profiledata, name } = route.params;
  return (
    <View style={styles.container}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: `${profiledata.result[0].avatar}` }}></Image>
      <View style={styles.rank}>
        <Text>Rank : {profiledata.result[0].rank}</Text>
        <Text>Contribution : {profiledata.result[0].contribution}</Text>
      </View>
      <View style={styles.rank}>
        <Text>Max Rating : {profiledata.result[0].maxRating}</Text>
        <Text>Rating : {profiledata.result[0].rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    backgroundColor:'white',
    flexDirection:'column',
    alignItems:'center'
  },
  rank:{
    flexDirection:'column',
    justifyContent:'space-evenly',
    height:100
  },
  rating:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
})

export default Profile;
