import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const PreviousSolved = ({ route }) => {
  const { name, problems } = route.params;
  return (
    <View style={styles.mainContainer}>
      <FlatList
      style={styles.listData}
        data={problems}
        renderItem={({ item }) => (
   
          <View style={styles.container}>
            <View style={styles.first}>
              <View style={styles.individual}>
                <Text style={styles.textData}>Index</Text>
                <Text>{item.problem.index}</Text>
              </View>
              <View style={styles.individual}>
                <Text style={styles.textData}>Name</Text>
                <Text>{item.problem.name}</Text>
              </View>
            </View>
            <View style={styles.second}>
              <View style={styles.individual}>
                <Text style={styles.textData}>Rating</Text>
                <Text>{item.problem.rating}</Text>
              </View>
              <View style={styles.individual}>
                <Text style={styles.textData}>Participant Type</Text>
                <Text>{item.author.participantType}</Text>
              </View>
              <View style={styles.individual}>
                <Text style={styles.textData}>Verdict</Text>
                <Text>{item.verdict}</Text>
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
  
  mainContainer:{
    flex:1,
    backgroundColor:'#FEE3EC'
  },
  container: {
    flexDirection: 'column',
    marginBottom: 15,
    backgroundColor:'#FFF9F9',
    marginHorizontal:20,
    borderRadius:20,
    marginVertical:25
  },
  individual: {
    flexDirection: 'column',
    alignItems:'center'
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding:10
  },
  second: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom:10
  },
  textData:{
    fontSize:15,
    fontWeight:'bold'
  }
})

export default PreviousSolved;
