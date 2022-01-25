import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const PreviousSolved = ({ route }) => {
  const { name, problems } = route.params;
  console.log(problems);
  return (
    <View>
      <FlatList
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
  container: {
    flexDirection: 'column',
    marginBottom: 15,
    borderColor:'black',
    borderWidth:0.5
  },
  individual: {
    flexDirection: 'column',
    alignItems:'center'
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  second: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default PreviousSolved;
