import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'


export default class LupaPassword extends Component {

    render() {
        return (
            <View
                style={styles.Container}>

                {/* top logo */}
                <View style={styles.logoView}>
                    <View>
                        <Image style={styles.logo}
                            source={require('../../../asset/icon/logorumah.jpg')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.tekslogo1}>lelang</Text>
                        <Text style={styles.tekslogo2}>rumah</Text>
                    </View>
                </View>

                <Text style={{textAlign:'center', fontSize:16, color:'gray', marginBottom:20, paddingHorizontal:50}}>Masukkan alamat email anda untuk mengirim Password</Text>


                {/* nama dan EMAIL */}

                <View style={styles.ViewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Alamat email'}
                        placeholderTextColor={'#474747'}
                    />
                </View>

                {/* MASUK */}
                <TouchableOpacity
                    style={{ width: '100%', marginTop: 20, }}>
                    <View
                        style={styles.loginButton} >
                        <Text style={styles.textButton}>MASUK</Text>
                    </View>
                </TouchableOpacity>





            </View>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.9
    },
    logoView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    logo: {
        height: 50,
        width: 50
    },
    tekslogo1: {
        color: 'orange',
        fontSize: 25,
    },
    tekslogo2: {
        color: 'darkcyan',
        fontSize: 25,
        fontWeight: 'bold'
    },
    ViewInput: {
        width: '100%',
        paddingHorizontal: 30
    },
    textInput: {
        height: 50,
        fontSize: 18,
        paddingHorizontal: 30,
        color: '#474747',
        borderWidth: 0.8,
        borderColor: '#474747',
        opacity: 0.5,
        borderRadius: 25,
    },
    lupaPassword: {
        color: '#474747',
        textAlign: 'right',
        fontSize: 14,
        opacity: 0.5
    },
    loginButton: {
        height: 50,
        fontSize: 18,
        marginHorizontal: 30,
        backgroundColor: 'orange',
        borderRadius: 25,
        justifyContent: 'center'
    },
    textButton: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },




})