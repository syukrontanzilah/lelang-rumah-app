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


class MenuRumah extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                  <Logo />
                <ScrollView
                showsVerticalScrollIndicator={false}>
                  
                    <View style={styles.Wrapper}>
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity
                            // onPress={()=> this.props.navigation.navigate('DescRumah')}
                            >
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.Image} source={require('../../../asset/icon/rumah1.jpeg')} />
                                </View>
                                <Text style={styles.title}>Tanah & Bangunan</Text>
                                <Text style={styles.price}>Rp.385.000.000</Text>
                                <Text style={styles.location}>Bogor-Jawa Barat</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 5 }} />
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.Image} source={require('../../../asset/icon/rumah3.jpeg')} />
                                </View>
                                <Text style={styles.title}>Tanah & Bangunan</Text>
                                <Text style={styles.price}>Rp.631.000.000</Text>
                                <Text style={styles.location}>Gianyar-Bali</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Wrapper}>
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.Image} source={require('../../../asset/icon/rumah4.jpeg')} />
                                </View>
                                <Text style={styles.title}>Tanah & Bangunan</Text>
                                <Text style={styles.price}>Rp.367.000.000</Text>
                                <Text style={styles.location}>Sumedang-Jawa Barat</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 5 }} />
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.Image} source={require('../../../asset/icon/rumah6.png')} />
                                </View>
                                <Text style={styles.title}>Tanah & Rumah</Text>
                                <Text style={styles.price}>Rp.401.000.000</Text>
                                <Text style={styles.location}>Bandung-Jawa Barat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Wrapper}>
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.Image} source={require('../../../asset/icon/rumah7.jpeg')} />
                                </View>
                                <Text style={styles.title}>Tanah & Bangunan</Text>
                                <Text style={styles.price}>Rp.327.000.000</Text>
                                <Text style={styles.location}>Serang-Banten</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 5 }} />
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.Image} source={require('../../../asset/icon/rumah8.jpeg')} />
                                </View>
                                <Text style={styles.title}>Tanah & Rumah</Text>
                                <Text style={styles.price}>Rp.201.000.000</Text>
                                <Text style={styles.location}>Depok-Jawa Barat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Wrapper}>
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.Image} source={require('../../../asset/icon/rumah1.jpeg')} />
                                </View>
                                <Text style={styles.title}>Tanah & Bangunan</Text>
                                <Text style={styles.price}>Rp.385.000.000</Text>
                                <Text style={styles.location}>Bogor-Jawa Barat</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 5 }} />
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.Image} source={require('../../../asset/icon/rumah3.jpeg')} />
                                </View>
                                <Text style={styles.title}>Tanah & Bangunan</Text>
                                <Text style={styles.price}>Rp.631.000.000</Text>
                                <Text style={styles.location}>Gianyar-Bali</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default MenuRumah;



const styles = StyleSheet.create({
    Wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10
    },
    imageWrapper: {
        flex: 1,
        height: 180,
        borderRadius: 10
    },
    Image: {
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 5
    },
    title: {
        fontSize: 16,
        color: '#474747',
        fontWeight: 'bold',
        borderBottomColor: '#d2d2d2',
        borderBottomWidth: 1,
        marginTop: 5
    },
    price: {
        fontSize: 18,
        color: 'darkcyan',
        fontWeight: 'bold'
    },
    location: {
        fontSize: 14,
        color: '#474747',
    }



})