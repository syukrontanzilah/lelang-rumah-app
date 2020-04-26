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
import Logo from '../../../component/Logo';
import Ops from '../../../component/Ops';
import MenuRumah from '../MenuRumah';


    class Terdekat extends Component {
        render(){
            return(
                <View style={{ flex: 1 }}>
                <MenuRumah/>
            </View>
            )
        }
    }

    export default Terdekat;