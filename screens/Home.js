import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import MenuButton from '../components/MenuButton';
import ContactMenu from '../components/ContactMenu';

const Home = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: "100%" }}>
                <Header />
                <SearchBar />
                <MenuButton />
                <ContactMenu />
            </SafeAreaView>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15
    }
})