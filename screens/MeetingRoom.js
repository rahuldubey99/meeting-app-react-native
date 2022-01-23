import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StartMeeting from '../components/StartMeeting';

const MeetingRoom = () => {
const [name,setName] = useState();
const [roomId, setRoomId] = useState();
    return (
        <View style={styles.container}>
            <StartMeeting 
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
            />
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1c1c1c",
        flex: 1,    
    }
}); 