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


class MenuMobil extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <ScrollView style={{}}>

                    <View style={styles.orange}>
                        <View style={styles.wrapTitle}>
                            <View style={styles.wrapImage}>
                                <Image style={{ width: 45, height: 45, }} source={require('../../../asset/icon/car5.png')} />
                            </View>
                            <View>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Halo,</Text>
                                <Text style={{ color: 'white', fontSize: 16, }}>Kami ada <Text style={{ fontWeight: 'bold' }}>247.604</Text> Mobil di tokomobil.com</Text>
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'white', marginTop: 25, marginHorizontal: 15, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                            <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderBottomWidth: 4, borderBottomColor: '#eb7d16' }}>
                                <Image style={{ width: 40, height: 40, marginRight: 10 }} source={require('../../../asset/icon/car.png')} />
                                <Text style={{ color: '#eb7d16', fontWeight: 'bold', fontSize: 18 }}>Mobil</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: '#d2d2d2', borderTopRightRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('../../../asset/icon/scooter.png')} />
                                <Text style={{ color: '#5F7D95', fontWeight: 'bold', fontSize: 18 }}>Motor</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'white', marginHorizontal: 15, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                            <View style={{ flex: 1, justifyContent: 'center', marginLeft: 15 }}>
                                <Text style={{ fontSize: 16, color: '#5f7d95' }}>Temukan mobil impian Anda bersama kami</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 20, height: 20, marginRight: 15 }} source={require('../../../asset/icon/search3.png')} />
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 85, backgroundColor: '#d2d2d2', marginTop: 30, marginHorizontal: 15, flexDirection: 'row', borderRadius: 5, opacity: 0.75 }}>

                        <View style={{ borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginRight: 15, paddingLeft: 15 }}>
                            <Image style={{ width: 45, height: 45, }} source={require('../../../asset/icon/map.png')} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: '#5F7D95', fontWeight: 'bold', fontSize: 18 }}>Pencarian Tersimpan</Text>
                            <Text style={{ color: '#5F7D95', fontSize: 14 }}>Sematkan pencarian tersimpan favorit Anda disini. Sematkan Sekarang!</Text>

                        </View>
                        <View style={{ alignItems: 'center', width: 50, height: 50, marginTop: 20 }}>
                            <Image style={{ width: 17, height: 17, }} source={require('../../../asset/icon/cancel.png')} />
                        </View>
                    </View>

                    {/* Hot Deal */}
                    <View style={{ marginTop: 20, marginBottom: 15, marginHorizontal: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: '#474747', fontSize: 16, fontWeight: 'bold' }}>Hot Deals</Text>
                        <Text style={{ color: 'orange', fontWeight: 'bold' }}>Lihat Semua</Text>
                    </View>

                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ paddingHorizontal: 15 }}>

                        <View style={styles.wrapMobil}>
                            <View style={{ height: 100, }}>
                                <Image style={styles.imageMobil} source={require('../../../asset/icon/xpander.jpg')} />
                            </View>
                            <View style={styles.wrapDesc}>
                                <Text style={styles.textMobil}>Mitsubishi Xpander 2020 Promo DP Ringan</Text>
                                <Text style={styles.hargaMobil}>Rp 258.400.000</Text>
                            </View>
                        </View>
                        <View style={styles.wrapMobil}>
                            <View style={{ height: 100, }}>
                                <Image style={styles.imageMobil} source={require('../../../asset/icon/brio.jpg')} />
                            </View>
                            <View style={styles.wrapDesc}>
                                <Text style={styles.textMobil}>2020 Honda Brio 1,2 RS Hatchback</Text>
                                <Text style={styles.hargaMobil}>Rp 201.000.000</Text>
                            </View>
                        </View>
                        <View style={styles.wrapMobil}>
                            <View style={{ height: 100, }}>
                                <Image style={styles.imageMobil} source={require('../../../asset/icon/avanza.jpg')} />
                            </View>
                            <View style={styles.wrapDesc}>
                                <Text style={styles.textMobil}>2020 Toyota Avanza 1.5 Veloz MPV</Text>
                                <Text style={styles.hargaMobil}>Rp 214.700.000</Text>
                            </View>
                        </View>
                        <View style={styles.wrapMobil}>
                            <View style={{ height: 100, }}>
                                <Image style={styles.imageMobil} source={require('../../../asset/icon/avanza2.jpg')} />
                            </View>
                            <View style={styles.wrapDesc}>
                                <Text style={styles.textMobil}>2020 Toyota Avanza 1,3 G MPV</Text>
                                <Text style={styles.hargaMobil}>Rp 196.000.000</Text>
                            </View>
                        </View>

                        <View style={{marginHorizontal:8}}/>
                      

                    </ScrollView>


                    {/* Mobil Murah bekas */}
                    <View style={{ marginTop: 25, marginBottom: 15, marginHorizontal: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: '#474747', fontSize: 16, fontWeight: 'bold' }}>Mobil Murah Bekas</Text>
                        <Text style={{ color: 'orange', fontWeight: 'bold' }}>Lihat Semua</Text>
                    </View>

                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ paddingHorizontal: 15 }}>

                        <View style={styles.wrapMobil}>
                            <View style={{ height: 100, }}>
                                <Image style={styles.imageMobil} source={require('../../../asset/icon/kijang.jpg')} />
                            </View>
                            <View style={styles.wrapDesc}>
                                <Text style={styles.textMobil}>2014/2015 Toyota Kijang Innova 2.5 Diesel G MPV</Text>
                                <Text style={styles.hargaMobil}>Rp 198.000.000</Text>
                            </View>
                        </View>
                        <View style={styles.wrapMobil}>
                            <View style={{ height: 100, }}>
                                <Image style={styles.imageMobil} source={require('../../../asset/icon/lexus.jpg')} />
                            </View>
                            <View style={styles.wrapDesc}>
                                <Text style={styles.textMobil}>2014 Lexus ES300h 2.5 ES300h Sedan</Text>
                                <Text style={styles.hargaMobil}>Rp 350.000.000</Text>
                            </View>
                        </View>
                        <View style={styles.wrapMobil}>
                            <View style={{ height: 100, }}>
                                <Image style={styles.imageMobil} source={require('../../../asset/icon/dodge.jpg')} />
                            </View>
                            <View style={styles.wrapDesc}>
                                <Text style={styles.textMobil}>2014 Dodge Journey 2.4 SXT Platinum SUV</Text>
                                <Text style={styles.hargaMobil}>Rp 235.000.000</Text>
                            </View>
                        </View>
                        <View style={styles.wrapMobil}>
                            <View style={{ height: 100, }}>
                                <Image style={styles.imageMobil} source={require('../../../asset/icon/ayla.jpg')} />
                            </View>
                            <View style={styles.wrapDesc}>
                                <Text style={styles.textMobil}>2015 Daihatsu Ayla 1.0 X Elegant Hatchback TDP </Text>
                                <Text style={styles.hargaMobil}>Rp 75.000.000</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:8}}/>

                    </ScrollView>





                </ScrollView>
            </View>
        )
    }
}

export default MenuMobil;

const styles = StyleSheet.create({
    orange: {
        backgroundColor: '#eb7d16',
        height: 220
    },
    wrapTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 15
    },
    wrapImage: {
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    imageMobil: {
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
        flex: 1,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    wrapMobil: {
        height: 160, width: 130, marginRight: 15, borderRadius: 5, borderWidth: 0.5, borderColor: '#d2d2d2'
    },
    wrapDesc: {
        height: 58, backgroundColor: 'white', borderBottomRightRadius: 5, borderBottomLeftRadius: 5
    },
    textMobil :{
        color:'#474747', fontSize:12, marginTop:5, paddingHorizontal:5
    },
    hargaMobil: {
        color:'#eb7d16', fontSize:14, paddingHorizontal:5, marginTop:5, fontWeight:'bold'
    }
})