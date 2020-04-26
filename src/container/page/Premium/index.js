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


class Premium extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Ops />
            </View>
        )
    }
}

export default Premium;