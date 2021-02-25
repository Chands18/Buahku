import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderBuah from './components/Molecules/HeaderBuah';
import { Home } from './pages';
import { Routes } from './routes';

export default function App() {
    return (
        <View style={styles.container}>
          <HeaderBuah/>
          <Home/>
        </View>
        // <SafeAreaProvider>
        //   <Routes/>
        // </SafeAreaProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }
})