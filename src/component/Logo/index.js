import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
}
    from 'react-native';


export default class Logo extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#d2d2d2',
                borderBottomWidth: 0.6
            }}>
                <View>
                    <Image style={{
                        height: 40,
                        width: 40
                    }}
                        source={require('../../../src/asset/icon/logorumah.jpg')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        color: 'orange',
                        fontSize: 20,
                    }}>lelang</Text>
                    <Text style={{
                        color: 'darkcyan',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>rumah</Text>
                </View>
            </View>
        )
    }

}