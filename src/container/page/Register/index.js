import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'


export default class Register extends Component {

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


                {/* nama dan EMAIL */}

                <View style={styles.ViewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Nama'}
                        placeholderTextColor={'#474747'}
                    />
                </View>

                <View style={{ marginVertical: 10 }} />

                <View style={styles.ViewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Alamat email'}
                        placeholderTextColor={'#474747'}
                    />
                </View>

                <View style={{ marginVertical: 10 }} />


                {/* PASSWORD */}
                <View style={styles.ViewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Password'}
                        placeholderTextColor={'#474747'}
                        secureTextEntry={true}
                    />
                </View>

                <View style={{ marginVertical: 10 }} />

                {/* konfirmasi PASSWORD */}
                <View style={styles.ViewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Konfirmasi Password'}
                        placeholderTextColor={'#474747'}
                        secureTextEntry={true}
                    />
                </View>


                {/* LOGIN */}
                <TouchableOpacity
                    style={{ width: '100%', marginTop: 30, }}>
                    <View
                        style={styles.loginButton} >
                        <Text style={styles.textButton}>DAFTAR</Text>
                    </View>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row', opacity: 0.7, justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={{ color: '#474747' }}>Sudah punya akun?  </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{ color: 'orange', fontWeight: 'bold' }}> Login</Text>
                    </TouchableOpacity>
                </View>


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