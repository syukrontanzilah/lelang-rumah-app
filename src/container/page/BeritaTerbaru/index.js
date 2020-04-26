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


class BeritaTerbaru extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ paddingVertical: 15, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, }}>
                        <Image style={{ width: 20, height: 20, }} source={require('../../../asset/icon/back2.png')} />
                    </TouchableOpacity>
                    {/* banner */}
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ color: '#EB7D16', fontSize: 20, textAlign: 'center', }}>Berita Terbaru Kami</Text>
                    </View>
                    <View style={{ marginLeft: 20 }} />
                </View>


                <ScrollView>
                    <View style={{ borderTopWidth: 0.8, borderTopColor: '#eb7d16' }}>
                        <Text style={{ color: '#474747', marginLeft: 20, paddingVertical: 10 }}>Bagikan Artikel ini</Text>
                    </View>
                    <View style={{ height: 50, flexDirection: 'row', marginHorizontal: 40 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <View style={{ height: 50, width: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 40, height: 40, }} source={require('../../../asset/icon/whatsapp.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <View style={{ height: 50, width: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 40, height: 40, }} source={require('../../../asset/icon/facebook.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <View style={{ height: 50, width: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 40, height: 40, }} source={require('../../../asset/icon/twitter.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <View style={{ height: 50, width: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 40, height: 40, }} source={require('../../../asset/icon/line.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ViewImage}>
                        <Image style={styles.imageBanner} source={require('../../../asset/icon/berita1.jpeg')} />
                    </View>
                    <Text style={styles.textBerita}>
                        Dukung Program PSBB, mobil88 Beri Pelanggan Kemudahan Cek & Test Drive Mobil #DariRumahAja
                    </Text>

                    <View style={styles.ViewImage}>
                        <Image style={styles.imageBanner} source={require('../../../asset/icon/berita2.jpg')} />
                    </View>
                    <Text style={styles.textBerita}>
                        Per 9 April 2020, Nilai Aksi Korporasi Capai Rp27,8 Triliun
                    </Text>

                    <View style={styles.ViewImage}>
                        <Image style={styles.imageBanner} source={require('../../../asset/icon/berita3.jpg')} />
                    </View>
                    <Text style={styles.textBerita}>
                        Permintaan Uang Jelang Ramadan di NTB Turun Signifikan Akibat Covid-19
                    </Text>



                </ScrollView>




            </View>
        )
    }
}

export default BeritaTerbaru;

const styles = StyleSheet.create({
    ViewImage: {
        height: 200,
        backgroundColor: 'pink',
        marginHorizontal: 15,
        borderRadius: 5,
        marginTop: 20
    },
    imageBanner: {
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
        flex: 1,
    },
    textBerita: {
        color: '#474747',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 15,
        marginTop: 5
    }



})