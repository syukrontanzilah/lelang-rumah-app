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



class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* title profil and top navigation */}
                    <View style={styles.WrapTopNav}>
                        <View>
                            <Text style={styles.textProfile}>My Profile</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image style={styles.Heart} source={require('../../../asset/icon/heart.png')} />
                                <View style={styles.notif}>
                                    <Text style={{ color: 'white' }}>2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.setting} source={require('../../../asset/icon/setting.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* SCROLL VIEW CONTAINER */}
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.viewGrey}>
                        </View>
                        {/* card profil and foto profile */}
                        <View style={styles.WrapProfile}>
                            <View style={styles.ProfilTitle}>
                                <View style={styles.wrapPP}>
                                    <Image style={styles.imgPP} source={require('../../../asset/icon/alwi2.jpg')} />
                                </View>
                                <Text style={styles.textPP}>Alwi Assegaff</Text>
                            </View>
                            {/* saldo kredit, ovo dll */}
                            <View style={styles.paymentWrap}>
                                <View style={styles.payment}>
                                    <TouchableOpacity style={styles.iconPayment}>
                                        <Image style={styles.imgPayment} source={require('../../../asset/icon/ovo.jpeg')} />
                                        <Text style={styles.textImg}>OVO</Text>
                                        <Text style={styles.saldo}>Rp.58.000</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.payment}>
                                    <TouchableOpacity style={styles.iconPayment}>
                                        <Image style={styles.imgPayment} source={require('../../../asset/icon/wallet.png')} />
                                        <Text style={styles.textImg}>Saldo</Text>
                                        <Text style={styles.saldo}>Rp.2.000</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.payment}>
                                    <TouchableOpacity style={styles.iconPayment}>
                                        <Image style={styles.imgPayment} source={require('../../../asset/icon/cost.png')} />
                                        <Text style={styles.textImg}>Credit</Text>
                                        <Text style={styles.saldo}>Rp.0</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.jualbeli}>
                                <View style={styles.pembeliView}>
                                    <Text style={styles.textPembeli}>Pembeli</Text>
                                </View>
                                <View style={styles.penjualView}>
                                    <Text style={styles.textPenjual}>Penjual</Text>
                                </View>
                            </View>
                        </View>
                        {/* end card paymend profil */}
                        {/* Pelanggan khusus */}
                        <View style={styles.containerKhusus}>
                            <Text style={styles.WrapTextKhusus}>Khusus untuk Kamu</Text>
                            <View style={styles.khususWrap}>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image style={styles.khususImg} source={require('../../../asset/icon/coupon.png')} />
                                </View>
                                <View>
                                    <Text style={styles.TextKhusus}>Voucherku</Text>
                                    <Text style={styles.khususDesc}>Lihat voucher seru yang kamu punya</Text>
                                </View>
                            </View>
                            <View style={styles.khususWrap}>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image style={styles.khususImg} source={require('../../../asset/icon/heart2.png')} />
                                </View>
                                <View>
                                    <Text style={styles.TextKhusus}>Barang Favorit</Text>
                                    <Text style={styles.khususDesc}>Beli barang impian yang sudah kamu kumpulkan</Text>
                                </View>
                            </View>
                            <View style={styles.khususWrap}>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image style={styles.khususImg} source={require('../../../asset/icon/star2.png')} />
                                </View>
                                <View>
                                    <Text style={styles.TextKhusus}>Pembeli Prioritas</Text>
                                    <Text style={styles.khususDesc}>Jadi pembeli prioritas pasti lebih untung</Text>
                                </View>
                            </View>
                            <View style={styles.khususWrap}>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image style={styles.khususImg} source={require('../../../asset/icon/list.png')} />
                                </View>
                                <View>
                                    <Text style={styles.TextKhusus}>Langganan</Text>
                                    <Text style={styles.khususDesc}>Cek barang terbaru dari langgananmu</Text>
                                </View>
                            </View>
                            <View style={styles.khususWrap}>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image style={styles.khususImg} source={require('../../../asset/icon/cart.png')} />
                                </View>
                                <View>
                                    <Text style={styles.TextKhusus}>Transaksi Rutin</Text>
                                    <Text style={styles.khususDesc}>Atur transaksi rutin kamu bebas ribet</Text>
                                </View>
                            </View>
                            <View style={styles.khususWrap}>
                                <View style={{ justifyContent: 'center', }}>
                                    <Image style={styles.khususImg} source={require('../../../asset/icon/hadiah.png')} />
                                </View>
                                <View>
                                    <Text style={styles.TextKhusus}>Hadiah Seru</Text>
                                    <Text style={styles.khususDesc}>Temukan hadiah khusus dari kami buat kamu</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
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
                            onPress={() => this.props.navigation.replace('Bantuan')}
                        >
                            <View style={{
                                height: 25,
                                width: 25,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: '#9dabb4',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/question1.png')} />
                            </View>
                            <Text style={{ color: '#9dabb4', fontSize: 11, alignSelf: 'center', }}>Bantuan</Text>
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
                                borderColor: '#278E8C',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/user.png')} />
                            </View>
                            <Text style={{ color: '#278E8C', fontSize: 11, alignSelf: 'center', }}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* end bottom nav */}


            </View>
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    WrapTopNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 45,
        backgroundColor: 'lightgray',
        paddingHorizontal: 15,
        paddingTop: 15
    },
    textProfile: {
        color: '#5F7D95',
        fontWeight: 'bold',
        fontSize: 18
    },
    Heart: {
        width: 23,
        height: 23,
        marginRight: 15
    },
    notif: {
        height: 18,
        width: 18,
        backgroundColor: 'red',
        position: 'absolute',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        left: 10,
        bottom: 20
    },
    setting: {
        width: 23,
        height: 23,
    },
    viewGrey: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        backgroundColor: 'lightgray',
        paddingHorizontal: 15,
        paddingTop: 15
    },
    paymentWrap: {
        height: 80,
        flexDirection: 'row',
        marginTop: 20
    },
    payment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconPayment: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgPayment: {
        width: 23,
        height: 23,
    },
    textImg: {
        color: '#5f7d95',
        fontSize: 14,
        opacity: 0.5,
        marginTop: 5
    },
    saldo: {
        color: '#5f7d95',
        fontWeight: 'bold',
        fontSize: 15,
        opacity: 0.75
    },
    jualbeli: {
        height: 50,
        marginTop: 27,
        flexDirection: 'row',
        marginHorizontal: 15
    },
    pembeliView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#31bab7',
        borderBottomWidth: 4
    },
    textPembeli: {
        color: '#474747',
        fontWeight: 'bold',
        opacity: 0.9,
        fontSize: 15
    },
    penjualView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPenjual: {
        color: 'lightgray',
        fontWeight: 'bold',
        fontSize: 15
    },
    // CARD Profile
    WrapProfile: {
        height: 240,
        backgroundColor: 'white',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: -20
    },
    ProfilTitle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapPP: {
        marginTop: -20,
        width: 55,
        height: 55,
        backgroundColor: '#31bab7',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },
    imgPP: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginHorizontal: 10
    },
    textPP: {
        color: '#5F7D95',
        fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.8,
        marginTop: 10
    },
    // khusus utk kamu view
    containerKhusus: {
        backgroundColor: 'white',
        marginTop: 15,
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 20
    },
    WrapTextKhusus: {
        color: '#474747',
        fontWeight: 'bold',
        opacity: 0.9,
        fontSize: 15
    },
    khususWrap: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#d2d2d2'
    },
    khususImg: {
        width: 23,
        height: 23,
        marginRight: 15
    },
    TextKhusus: {
        color: '#474747',
        fontWeight: 'bold',
        opacity: 0.9,
        fontSize: 15
    },
    khususDesc: {
        color: 'gray',
        opacity: 0.6,
        fontSize: 15
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
})