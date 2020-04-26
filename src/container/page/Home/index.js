import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
}
    from 'react-native';
import LelangTerbaru from '../../../component/LelangTerbaru';
import Logo from '../../../component/Logo';


class Home extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Wrapper}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        {/* top logo */}
                        <Logo />
                        {/* CAROUSEL scroll horizontal */}
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false} style={styles.ScrollBanner}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Banner1')}>
                                <View style={{ marginRight: 10 }}>
                                    <View style={styles.imgViewBanner}>
                                        <Image style={styles.imgBanner} source={require('../../../asset/icon/banner2.png')} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Banner2')}>
                                <View style={{ marginRight: 10 }}>
                                    <View style={styles.imgViewBanner}>
                                        <Image style={styles.imgBanner} source={require('../../../asset/icon/rumah2.jpg')} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Banner3')}>
                                <View style={{ marginRight: 10 }}>
                                    <View style={styles.imgViewBanner}>
                                        <Image style={styles.imgBanner} source={require('../../../asset/icon/sweet.jpg')} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginRight: 10 }} />
                        </ScrollView>

                        {/* CARD MENU */}
                        <View style={styles.cardMenu}>
                            {/* CARI KEYWORD */}
                            <View style={{}}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Pencarian')}>
                                    <View style={styles.searchView}>
                                        <Text style={styles.textSearch}>Cari Rumah, Mobil, <Text style={{fontStyle:'italic', fontWeight:'bold'}}>Keyword</Text> ...</Text>
                                        <Image style={styles.imgSearch} source={require('../../../asset/icon/search2.png')} />
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* berita terbaru */}
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('BeritaTerbaru')}>
                                <View style={styles.News}>
                                    <Text style={styles.textNews}>Berita Terbaru</Text>
                                </View>
                            </TouchableOpacity>

                            {/* MENU FEATURE */}
                            <View style={styles.menuWrapper}>
                                <View style={styles.menuWrap}>
                                    <View style={styles.circleMenu}>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('MenuRumah')}>
                                            <View style={styles.ViewImgMenu}>
                                                <Image style={styles.imgMenu} source={require('../../../asset/icon/rumah.png')} />
                                            </View>
                                            <Text style={styles.textMenu}>Rumah</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.circleMenu}>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('MenuMobil')}>
                                            <View style={styles.ViewImgMenu}>
                                                <Image style={styles.imgMenu} source={require('../../../asset/icon/car3.png')} />
                                            </View>
                                            <Text style={styles.textMenu}>Mobil</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.circleMenu}>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('MenuLainnya')}>

                                            <View style={styles.ViewImgMenu}>
                                                <Image style={styles.imgMenu} source={require('../../../asset/icon/menu.png')} />
                                            </View>
                                            <Text style={styles.textMenu}>Lainnya</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* end card menu feature */}

                        {/* PILIHAN EDITOR */}
                        <View style={styles.ViewEditor}>
                            <Text style={styles.textEditor}>Pilihan Editor</Text>
                        </View>
                        {/* pilihan editor scroll horizontal */}
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.ScrollEditor}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('HotPrice')}>
                                <View style={styles.ViewEditorMenu}>
                                    <View style={styles.viewImgEditor}>
                                        <Image style={styles.imgEditor} source={require('../../../asset/icon/fire.png')} />
                                    </View>
                                    <Text style={styles.textPilihan}>Hot Price</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Terdekat')}>
                                <View style={styles.ViewEditorMenu}>
                                    <View style={styles.viewImgEditor}>
                                        <Image style={styles.imgEditor} source={require('../../../asset/icon/pin.png')} />
                                    </View>
                                    <Text style={styles.textPilihan}>Tedekat</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Premium')}>
                                <View style={styles.ViewEditorMenu}>
                                    <View style={styles.viewImgEditor}>
                                        <Image style={styles.imgEditor} source={require('../../../asset/icon/premium.png')} />
                                    </View>
                                    <Text style={styles.textPilihan}>Premium</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('InfoTips')}>
                                <View style={styles.ViewEditorMenu}>
                                    <View style={styles.viewImgEditor}>
                                        <Image style={styles.imgEditor} source={require('../../../asset/icon/lamp.png')} />
                                    </View>
                                    <Text style={styles.textPilihan}>Info & Tips</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginRight: 10 }} />
                        </ScrollView>

                        {/* Lelang Terbaru */}
                        <View style={styles.lelangTerbaru}>
                            <Text style={styles.textLelangTerbaru}>Lelang Terbaru</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('LelangTerbaru')}>
                                <Text style={styles.descLelang}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.Temukan}>Temukan Asset pilihan anda dengan harga terbaik</Text>
                        {/* List data lelang terbaru */}
                        <LelangTerbaru />
                        <View style={{ borderColor: '#d2d2d2', borderWidth: 0.5, marginTop: 20 }} />
                        {/* OOUR PARTNER*/}
                        <View style={styles.ourPartner}>
                            <Text style={styles.textPartner}>Partner kami</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Partner')}>
                                <Text style={styles.morePartner}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.descPartner}>Partner terpercaya</Text>
                        {/* img Partner */}
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false} style={styles.scrollPartner}>
                            <View style={{ marginRight: 10 }}>
                                <View style={{ width: 150, height: 80, }}>
                                    <Image style={styles.imgPartner} source={require('../../../asset/icon/mandiri.png')} />
                                </View>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <View style={{ width: 150, height: 80, }}>
                                    <Image style={styles.imgPartner} source={require('../../../asset/icon/bri.jpg')} />
                                </View>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <View style={{ width: 150, height: 80, }}>
                                    <Image style={styles.imgPartner} source={require('../../../asset/icon/cimb.jpg')} />
                                </View>
                            </View>

                            <View style={{ marginRight: 10 }} />
                        </ScrollView>

                    </ScrollView>

                    {/* Floating Chat Icon */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.navigate('Chat')}
                        style={styles.TouchableOpacityStyle}>
                        <Image
                            source={require('../../../asset/icon/comment.png')}
                            style={styles.FloatingButtonStyle}
                        />
                    </TouchableOpacity>
                </View>

                {/* BOTTOM NAVIGATION */}
                <View style={styles.WrapNav}>
                    <View style={styles.BottNav}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <View style={styles.imgActiveBot}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/home-run.png')} />
                            </View>
                            <Text style={styles.textActiveBot}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottNav}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.replace('Bantuan')}>
                            <View style={styles.imgNav}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/question1.png')} />
                            </View>
                            <Text style={styles.textNav}>Bantuan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottNav}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <View style={styles.imgNav}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/bell1.png')} />
                            </View>
                            <Text style={styles.textNav}>Notifikasi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottNav}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.replace('Profile')}>
                            <View style={styles.imgNav}>
                                <Image style={styles.imageNav} source={require('../../../asset/icon/user2.png')} />
                            </View>
                            <Text style={styles.textNav}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Home;


const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Wrapper: {
        flex: 1,
        backgroundColor: 'white'
    },
    ScrollBanner: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    imgViewBanner: {
        width: 250,
        height: 150,
    },
    imgBanner: {
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 10
    },
    cardMenu: {
        backgroundColor: 'darkcyan',
        marginHorizontal: 10,
        borderRadius: 5,
        paddingVertical: 25
    },
    // Search
    searchView: {
        marginTop: 15,
        width: '90%',
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: 'rgba(225,225,225, 0.7)',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 25
    },
    textSearch: {
        color: 'white',
        fontSize: 16
    },
    imgSearch: {
        width: 20,
        height: 20,
    },
    //news
    News: {
        marginTop: 15,
        width: '90%',
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: 'orange',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNews: {
        color: 'white', fontSize: 16
    },
    menuWrapper: {
        height: 100,
        marginTop: 20,
        marginHorizontal: 15,
    },
    menuWrap: {
        height: 100,
        flexDirection: 'row',
    },
    circleMenu: {
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewImgMenu: {
        height: 60,
        width: 60,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    imgMenu: {
        height: 35,
        width: 35
    },
    textMenu: {
        color: '#e6f2ff',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center'
    },
    ViewEditor: {
        marginHorizontal: 15,
        marginTop: 15
    },
    textEditor: {
        color: '#474747',
        fontWeight: 'bold',
        fontSize: 16
    },
    ScrollEditor: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    ViewEditorMenu: {
        marginRight: 10,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderWidth: 1
    },
    viewImgEditor: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    imgEditor: {
        width: 18,
        height: 18,
    },
    textPilihan: {
        fontSize: 18,
        color: 'gray'
    },
    lelangTerbaru: {
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textLelangTerbaru: {
        color: '#474747',
        fontWeight: 'bold',
        fontSize: 16
    },
    descLelang: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 16
    },
    Temukan: {
        color: '#474747',
        fontSize: 15,
        marginHorizontal: 15
    },
    ourPartner: {
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textPartner: {
        color: '#474747',
        fontWeight: 'bold',
        fontSize: 16
    },
    morePartner: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 16
    },
    descPartner: {
        color: '#474747',
        fontSize: 15,
        marginHorizontal: 15,
    },
    scrollPartner: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 20
    },
    imgPartner: {
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 5
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
    imgActiveBot: {
        height: 25,
        width: 25,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#278E8C',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    textActiveBot: {
        color: '#278E8C',
        fontSize: 11,
        alignSelf: 'center',
    },
    imgNav: {
        height: 25,
        width: 25,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#9DABB4',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    textNav: {
        color: '#9DABB4',
        fontSize: 11,
        alignSelf: 'center',
    }

})


