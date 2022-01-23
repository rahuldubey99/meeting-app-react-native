import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StartMeeting = ({name, setName, roomId, setRoomId}) => {
  return (
    
      <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput  style={styles.textInput} value={name} onChangeText={text=>setName(text)} placeholder="Enter name" placeholderTextColor="#7674"/>
                </View>
                <View style={styles.info}>
                    <TextInput  style={styles.textInput} value={roomId} onChangeText={text=>setRoomId(text)} placeholder="Enter room id" placeholderTextColor="#7674"/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.startMeetingButton} onPress={()=>{}}>
                        <Text style={{color:"white", fontWeight:"bold"}}>Start Meeting</Text>
                    </TouchableOpacity>
                </View>
            </View>
    
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
    
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: "#484648",
        padding:12
    },
    textInput: {
        color: "white",
        fontSize:18,

    },
    startMeetingButton:{
        width:350,
        marginTop:20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8470dc",
        height:50,
        borderRadius:15,
        

    }
}); 