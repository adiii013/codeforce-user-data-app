import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const ResultScreen = ({ route, navigation }) => {
  const { ratingdata, name } = route.params;
  return (
    <View style={styles.container} >
      <FlatList
      style={styles.listData}
        data={ratingdata}
        renderItem={({ item }) => (
          <View style={styles.mainContainer}>
            <View style={styles.contestName}>
              <Text style={styles.textData}>Contest</Text>
              <Text>{item.contestName}</Text>
            </View>
            <View style={styles.rating}>
              <View style={styles.eachRating}>
                <Text style={styles.textData}>Old Rating</Text>
                <Text>{item.oldRating}</Text>
              </View>
              <View style={styles.eachRating}>
                <Text style={styles.textData}>New Rating</Text>
                <Text>{item.newRating}</Text>
              </View>
              <View style = {styles.eachRating}>
                <Text style={styles.textData}>Rating Change</Text>
                <Text>{item.newRating-item.oldRating}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FEE3EC'
  },
  mainContainer: {
    marginBottom: 25,
    height:100,
    backgroundColor:'#FFF9F9',
    marginHorizontal:20,
    borderRadius:20,
    justifyContent:'space-evenly'
  },
  contestName: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  eachRating: {
    flexDirection: 'column',
    alignItems:'center'
  },
  listData: {
    marginTop: 30
  },
  textData:{
    fontSize:15,
    fontWeight:'bold'
  }
})

export default ResultScreen;
