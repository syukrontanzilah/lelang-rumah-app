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
import Ops from '../../../component/Ops';
import MenuRumah from '../MenuRumah';


class HotPrice extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            <MenuRumah/>
        </View>
        )
    }
}

export default HotPrice;