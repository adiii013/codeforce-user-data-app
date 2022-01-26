import { Text, View, TextInput, StyleSheet , TouchableOpacity  } from 'react-native';
import React , {useState} from 'react';
import { Feather } from '@expo/vector-icons';

function SearchScreen({navigation}) {

    const [name,Setname] = useState('')
    function search(){
        navigation.navigate('Result Screen')
    }
    const [problems,setProblems] = useState([{}])
    const [profiledata,setProfile] = useState([{}])
    const [ratingdata,setRating] = useState([{}])

    async function getData(){
        const data_prb = await fetch(`https://codeforces.com/api/user.status?handle=${name}&from=1&count=100`)
        const data_user = await fetch(`https://codeforces.com/api/user.info?handles=${name}`)
        const data_rank = await fetch(`https://codeforces.com/api/user.rating?handle=${name}`)
        const data_prbJson = await data_prb.json();
        const data_userJson = await data_user.json();
        const data_rankJson = await data_rank.json();
        setProblems(data_prbJson.result);
        setProfile(data_userJson);
        setRating(data_rankJson.result);
    }
     
    function problem(){ 
      navigation.navigate('Previous Solved',{problems,name});
    }
    
    function prof(){
        navigation.navigate('Profile',{profiledata,name});
    }
    
    function onRating(){
        navigation.navigate('Rating Change',{ratingdata,name});
    }

    return (
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <Feather name='search' size={25} style={{marginLeft:10}}></Feather>
                <TextInput
                    style={styles.inputText}
                    placeholder='Username'
                    onChangeText={text=>Setname(text)}
                    defaultValue={name}
                    onSubmitEditing={getData}
                ></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton} onPress={prof}>
                     <Text style = {styles.btt}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton} onPress={problem}>
                     <Text style = {styles.btt}>Problem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton} onPress={onRating}>
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
        backgroundColor:'#FEE3EC',
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 50,
        marginTop: 50,
        alignItems: 'center',
        backgroundColor:'#F5F5F5',
        borderRadius:10,
        height:50
    },
    inputText: {
        marginLeft: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        padding: 2,
        fontSize: 20,
        alignSelf: 'center',
        flex:1
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
        backgroundColor:'#EA99D5',
        fontSize:30,
        borderRadius:10,
        padding:5
    }
})

export default SearchScreen;
