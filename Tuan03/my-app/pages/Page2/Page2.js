import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Page2() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.image}></View>
            </View>
            <View style={styles.title}>
                <Text style={styles.text}>GROW</Text>
                <Text style={styles.text}>YOUR BUSINESS</Text>
            </View>
            <View style={styles.title2}>
                <Text style={styles.text2}>We will help you to grow your business using online server</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={styles.text3}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={styles.text3}>SIGN UP</Text>
                </TouchableOpacity>
                <Text style={styles.text3}>HOW WE WORK?</Text>
            </View>
        </SafeAreaView>
    );
}
