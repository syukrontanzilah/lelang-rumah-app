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



class Ops extends Component {
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: 'white',
                opacity: 0.5
            }}>
                <View>
                    <Image style={{ height: 200, width: 200 }}
                        source={require('../../../src/asset/icon/ops.png')} />
                </View>

                <Text style={{ color: '#474747', fontWeight: 'bold', fontSize: 40 }}>Oopss..</Text>
                <Text style={{ color: '#474747', fontSize: 16 }}>Halaman ini belum tersedia</Text>

            </View>
        )
    }
}

export default Ops;