import { Text, View, TextInput, StyleSheet , TouchableOpacity  } from 'react-native';
import React , {useState} from 'react';
import { Button } from 'react-native-web';


function SearchScreen({navigation}) {

    const [name,Setname] = useState('')
    function search(){
        navigation.navigate('Result Screen')
    }
    const [problems,setProblems] = useState([{}])

    async function getData(){
        const data = await fetch(`https://codeforces.com/api/user.status?handle=${name}&from=1&count=100`)
        const dataJson = await data.json();
        setProblems(dataJson.result);
    }
     
    function prb(){
        
      navigation.navigate('Previous Solved',{problems,name});
    }



    return (
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <Text style={styles.textData}>Enter Username</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Username'
                    onChangeText={text=>Setname(text)}
                    defaultValue={name}
                    onSubmitEditing={getData}
                ></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton} onPress={search}>
                     <Text style = {styles.btt}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton} onPress={prb}>
                     <Text style = {styles.btt}>Problem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton} onPress={search}>
                     <Text style = {styles.btt}>Rating Change</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
    },
    container: {
        flexDirection: 'column',
        marginHorizontal: 50,
        marginTop: 100,
        alignItems: 'center'
    },
    inputText: {
        marginLeft: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        padding: 2,
        fontSize: 20,
        alignSelf: 'center'
    },
    textData: {
        alignSelf: 'center',
        fontSize: 25,
        color:'#107896',
        marginBottom: 30,
        textShadowColor: 'rgba(87, 94, 94, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
        },
    searchButton:{
        alignSelf:'center',
        marginTop:50
    },
    btt:{
        backgroundColor:'#FFDADA',
        fontSize:30,
        borderRadius:10,
        padding:5
    }
})

export default SearchScreen;
