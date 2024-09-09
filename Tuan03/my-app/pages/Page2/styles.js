import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#00ccf9',
        height: '100%',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title2: {
        marginTop: 60,
        alignItems: 'center',
        width: 300,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
    },
    top: {
        width: '100%',
        height: 270,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 130,
        height: 130,
        borderColor: '#000',
        borderWidth: 12,
        textAlign: 'center',
        borderRadius: 100,
    },
    footer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 55,
        marginTop: 20,
    },
    button: {
        backgroundColor: 'orange',
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        width: 110,
    },
    text3: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
    },
});

export default styles;
