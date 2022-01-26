import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Profile = ({ route }) => {

  const { profiledata, name } = route.params;
  return (
    <View style={styles.container}>
      <Image style={{ width: 150, height: 150 , marginBottom:50 , borderRadius:20}} source={{ uri: `${profiledata.result[0].avatar}` }}></Image>
      <View style={styles.rank}>
        <View style={styles.indi}>
          <Text style={styles.textData}>Rank</Text>
          <Text style={styles.ansData}>{profiledata.result[0].rank}</Text>
        </View>
        <View style={styles.indi}>
          <Text style={styles.textData}>Contribution</Text>
          <Text style={styles.ansData}>{profiledata.result[0].contribution}</Text>
        </View>
      </View>
      <View style={styles.rank}>
        <View style={styles.indi}>
          <Text style={styles.textData}>Max Rating</Text>
          <Text style={styles.ansData}>{profiledata.result[0].maxRating}</Text>
        </View>
        <View style={styles.indi}>
          <Text style={styles.textData}>Current Rating</Text>
          <Text style={styles.ansData}>{profiledata.result[0].rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FEE3EC',
    flexDirection: 'column',
    alignItems: 'center'
  },
  rank: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 100
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  indi:{
    flexDirection:'column',
    alignItems:'center',
    marginHorizontal:30
  },
  textData:{
    fontSize:20,
    fontWeight:'bold'
  },
  ansData:{
    fontSize:20,
    color:'#548CFF',
    fontWeight:'bold'
  }
})

export default Profile;
