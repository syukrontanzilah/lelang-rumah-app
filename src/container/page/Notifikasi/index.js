import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet
}
    from 'react-native';
import Login from '../Login';


    class Notifikasi extends Component {
        render(){
            return(
                <View style={{flex:1}}>
                    <Login />
                </View>
            )
        }
    }

    export default Notifikasi;