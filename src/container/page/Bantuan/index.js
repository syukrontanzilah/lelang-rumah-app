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

class Bantuan extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ paddingVertical: 15, backgroundColor: 'darkcyan' }}>
                        <Text style={{ color: 'orange', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>F A Q</Text>
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <TouchableOpacity
                            // onPress={()=> this.props.navigation.navigate('Home')}
                            style={styles.DescView}>
                            <Text style={styles.DescTitle}>Tentang lelangrumah.com</Text>
                            <View style={styles.viewArrow}>
                                <Image style={styles.Arrow} source={require('../../../asset/icon/arrow1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={()=> this.props.navigation.navigate('Home')}
                            style={styles.DescView}>
                            <Text style={styles.DescTitle}>Syarat & Ketentuan</Text>
                            <View style={styles.viewArrow}>
                                <Image style={styles.Arrow} source={require('../../../asset/icon/arrow1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={()=> this.props.navigation.navigate('Home')}
                            style={styles.DescView}>
                            <Text style={styles.DescTitle}>Jadwal Lelang</Text>
                            <View style={styles.viewArrow}>
                                <Image style={styles.Arrow} source={require('../../../asset/icon/arrow1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={()=> this.props.navigation.navigate('Home')}
                            style={styles.DescView}>
                            <Text style={styles.DescTitle}>Pembayaran</Text>
                            <View style={styles.viewArrow}>
                                <Image style={styles.Arrow} source={require('../../../asset/icon/arrow1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={()=> this.props.navigation.navigate('Home')}
                            style={styles.DescView}>
                            <Text style={styles.DescTitle}>Akun Registrasi</Text>
                            <View style={styles.viewArrow}>
                                <Image style={styles.Arrow} source={require('../../../asset/icon/arrow1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={()=> this.props.navigation.navigate('Home')}
                            style={styles.DescView}>
                            <Text style={styles.DescTitle}>Tentang tokomobil.com</Text>
                            <View style={styles.viewArrow}>
                                <Image style={styles.Arrow} source={require('../../../asset/icon/arrow1.png')} />
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                    {/* FLOATING ICON CHAT */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.navigate('Chat')}
                        style={styles.TouchableOpacityStyle}>
                        <Image source={require('../../../asset/icon/comment.png')}
                        style={styles.FloatingButtonStyle} />
                    </TouchableOpacity>
                </View>
                {/* BOTTOM NAVIGATION */}
                <View style={styles.WrapNav}>
                    <View style={styles.BottNav}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.replace('Home')}
                        >
                            <View style={{
                                height: 25,
                                width: 25,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: '#9DABB4',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/home.png')} />
                            </View>
                            <Text style={{ color: '#9DABB4', fontSize: 11, alignSelf: 'center', }}>Home</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.BottNav}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Bantuan')}
                        >
                            <View style={{
                                height: 25,
                                width: 25,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: '#278E8C',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/question.png')} />
                            </View>
                            <Text style={{ color: '#278E8C', fontSize: 11, alignSelf: 'center', }}>Bantuan</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.BottNav}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <View style={{
                                height: 25,
                                width: 25,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: '#9DABB4',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/bell1.png')} />
                            </View>
                            <Text style={{ color: '#9DABB4', fontSize: 11, alignSelf: 'center', }}>Notifikasi</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.BottNav}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.replace('Profile')}
                        >
                            <View style={{
                                height: 25,
                                width: 25,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: '#9DABB4',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/user2.png')} />
                            </View>
                            <Text style={{ color: '#9DABB4', fontSize: 11, alignSelf: 'center', }}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* end bottom nav */}


            </View>
        )
    }
}

export default Bantuan;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    DescView: {
        justifyContent: 'space-between', 
        paddingHorizontal: 10, 
        paddingVertical: 20, 
        borderBottomWidth: 1, 
        borderBottomColor: '#d2d2d2', 
        flexDirection: 'row'
    },
    DescTitle: {
        color: '#474747', 
        fontSize: 16
    },
    viewArrow: {
        width: 20, 
        height: 20, 
        marginRight: 10
    },
    Arrow: {
        width: 20, 
        height: 20,
    },
    // bottom navigation
    WrapNav: {
        height: 60,
        flexDirection: 'row'
    },
    BottNav: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageNav: {
        height: 17,
        width: 17,
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: 'orange',
        borderRadius: 100
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
    },

})