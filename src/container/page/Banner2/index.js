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


class Banner2 extends Component {
    render() {
        return (
            <View style={styles.Container}>
                {/* page */}
                <View style={{ paddingVertical: 15, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity
                     onPress={() => this.props.navigation.goBack()}
                        style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10,  }}>
                        <Image style={{ width: 20, height: 20, }} source={require('../../../asset/icon/back2.png')} />
                    </TouchableOpacity>
                    {/* banner */}
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ color: '#EB7D16', fontSize: 20, textAlign: 'center', }}>Promo Detail</Text>
                    </View>
                    <View style={{marginLeft:20}}/>

                </View>



                <ScrollView>
                    <View style={styles.viewBanner}>
                        <Image style={styles.imageBanner} source={require('../../../asset/icon/rumah2.jpg')} />
                    </View>

                    {/* kupon */}
                    <View style={styles.viewKupon}>
                        <Image style={styles.kupon} source={require('../../../asset/icon/kupon.png')} />
                        <Text style={styles.textKupon}> KUPON</Text>
                    </View>

                    {/* salin kupon */}
                    <View style={styles.nomorSalin}>
                        <View style={styles.nomor}>
                            <Text style={styles.textnomor}>No: #4554679</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 1, height: 45, }}>
                            <View style={styles.salin}>
                                <Text style={styles.textnomor}>SALIN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* berlaku sampai */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 8, paddingVertical: 10, borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: '#d2d2d2', borderBottomColor: '#d2d2d2' }}>
                        <Text style={{ fontSize: 16, color: '#474747', opacity: 0.8 }}>Berlaku Sampai</Text>
                        <Text style={{ fontSize: 16, color: '#474747', opacity: 0.8 }}>24 Desember 2020</Text>
                    </View>

                    {/* opsi overview dll */}

                    <View style={{ height: 50, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EB7D16', borderBottomWidth: 4 }}>
                            <Text style={{ fontSize: 16, color: '#474747', fontWeight: 'bold', opacity: 0.8, }}>Oveview</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#d2d2d2', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 16, color: '#474747', fontWeight: 'bold', opacity: 0.8, }}>How to use</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#d2d2d2', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 16, color: '#474747', fontWeight: 'bold', opacity: 0.8, }}>T & C</Text>
                        </View>
                    </View>

                    {/* Description */}
                    <View>
                        <Text style={{ fontSize: 15, color: '#474747', opacity: 0.8, marginHorizontal: 10, marginTop: 10, textAlign: 'justify' }}>
                            Sebagai salah satu upaya PT LelangRumah Tbk. dalam rangka penyelesaian / pengembalian kredit debiturnya, dilakukan penjualan Agunan melalui pelelangan umum. Lelang adalah penjualan barang yang terbuka untuk umum dengan penawaran harga secara tertulis dan/atau lisan yang semakin meningkat atau menurun untuk mencapai harga tertinggi, yang didahului dengan Pengumuman Lelang.
                    </Text>
                    </View>




                </ScrollView>

            </View>
        )
    }
}

export default Banner2;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    viewBanner: {
        height: 200,
    },
    imageBanner: {
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
        flex: 1,
    },
    viewKupon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20
    },
    kupon: {
        height: 25,
        width: 25
    },
    textKupon: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#474747'
    },
    nomorSalin: {
        height: 50,
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20
    },
    nomor: {
        flex: 1,
        height: 45,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderColor: '#d2d2d2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textnomor: {
        fontSize: 16,
        color: '#474747',
        fontWeight: 'bold',
        opacity: 0.8
    },
    salin: {
        flex: 1,
        height: 45,
        backgroundColor: '#d2d2d2',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderColor: '#d2d2d2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})