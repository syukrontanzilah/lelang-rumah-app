import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 2000)
    })

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'white' }}>

            <View>
                <Image style={{ height: 180, width: 180 }}
                    source={require('../../../asset/icon/logorumah.jpg')} />
            </View>
            <View style={{flexDirection:'row', marginTop:-35}}>
                <Text style={{color:'orange', fontSize:30,}}>lelang</Text>
                <Text style={{color:'darkcyan', fontSize:30, fontWeight:'bold'}}>rumah</Text>
            </View>
        </View>
    )
}

export default Splash;

