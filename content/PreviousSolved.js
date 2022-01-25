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
                <Text>Index</Text>
                <Text>{item.problem.index}</Text>
              </View>
              <View style={styles.individual}>
                <Text>Name</Text>
                <Text>{item.problem.name}</Text>
              </View>
            </View>
            <View style={styles.second}>
              <View style={styles.individual}>
                <Text>Rating</Text>
                <Text>{item.problem.rating}</Text>
              </View>
              <View style={styles.individual}>
                <Text>Participant Type</Text>
                <Text>{item.author.participantType}</Text>
              </View>
              <View style={styles.individual}>
                <Text>Verdict</Text>
                <Text>{item.verdict}</Text>
              </View>
            </View>
          </View>
        )}

      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  
  mainContainer:{
    flex:1,
    backgroundColor:'white'
  },
  container: {
    flexDirection: 'column',
    marginBottom: 15,
    backgroundColor:'#fdfbfb',
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
  listData:{
  },
})

export default PreviousSolved;
