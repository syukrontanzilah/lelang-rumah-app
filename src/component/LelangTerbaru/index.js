import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
}
    from 'react-native';

const LelangTerbaru = () => {
    return (
        <View>
            <View style={styles.Wrapper}>
                <View style={{ flex: 1, }}>
                    <TouchableOpacity
                   >
                        <View style={styles.imageWrapper}>
                            <Image style={styles.Image} source={require('../../asset/icon/rumah1.jpeg')} />
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
                            <Image style={styles.Image} source={require('../../asset/icon/sawah.jpeg')} />
                        </View>
                        <Text style={styles.title}>Sawah</Text>
                        <Text style={styles.price}>Rp.201.000.000</Text>
                        <Text style={styles.location}>Sukabumi-Jawa Barat</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Wrapper}>
                <View style={{ flex: 1, }}>
                    <TouchableOpacity>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.Image} source={require('../../asset/icon/kios.jpeg')} />
                        </View>
                        <Text style={styles.title}>Kios Lokasi Strategis</Text>
                        <Text style={styles.price}>Rp.121.000.000</Text>
                        <Text style={styles.location}>Bandung-Jawa Barat</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: 5 }} />

                <View style={{ flex: 1, }}>
                    <TouchableOpacity>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.Image} source={require('../../asset/icon/kebun.jpeg')} />
                        </View>
                        <Text style={styles.title}>Tanah Kebun</Text>
                        <Text style={styles.price}>Rp.113.000.000</Text>
                        <Text style={styles.location}>Rangkasbitung-Banten</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default LelangTerbaru


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
        marginTop:5
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