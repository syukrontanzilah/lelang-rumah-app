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


class MenuLainnya extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ paddingVertical: 15, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, }}>
                        <Image style={{ width: 20, height: 20, }} source={require('../../../asset/icon/back2.png')} />
                    </TouchableOpacity>
                    {/* banner */}
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ color: '#EB7D16', fontSize: 20, textAlign: 'center', }}>Semua Kategori</Text>
                    </View>
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10,marginHorizontal:10 }}>
                        <Image style={{ width: 20, height: 20, }} source={require('../../../asset/icon/search4.png')} />
                    </TouchableOpacity>
                </View>

                <ScrollView>




                    {/* kategori */}
                    <View style={styles.menuWrapper}>
                        <View style={styles.menuRow}>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/hotel.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Ruko</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/eco-house.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Rumah</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/camping-tent.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Tanah Bangunan</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/gudang.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Gudang</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.menuWrapper}>
                        <View style={styles.menuRow}>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/forest2.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Tanah Sawah</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/forest.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Tanah Kebun</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/sprouts.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Tanah Darat</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/building.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Bangunan</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.menuWrapper}>
                        <View style={styles.menuRow}>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/eco-fuel.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>SPBU</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/kios.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Kios</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/car5.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Mobil</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/lifebuoy.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Alat Berat</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.menuWrapper}>
                        <View style={styles.menuRow}>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/service.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Mesin</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/scooter.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Motor</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} source={require('../../../asset/icon/news1.png')} />
                                    </View>
                                    <Text style={styles.textIcon}>Lain-lain</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperIcon}>
                                <TouchableOpacity>
                                    <View style={styles.iconMenu}>
                                        <Image style={styles.imgMenu} />
                                    </View>
                                    <Text style={styles.textIcon}></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
        )
    }
}

export default MenuLainnya;

const styles = StyleSheet.create({
    menuWrapper: {
        marginTop: 10, 
        paddingHorizontal: 10,
    },
    menuRow :{ 
        flexDirection: 'row',
    },
    wrapperIcon : {
        height: 90, 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    iconMenu : {
        height: 45, 
        width: 45, 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        borderRadius: 100,
    },
    imgMenu :{
        height: 30, 
        width: 30
    },
    textIcon : {
        color: '#474747', 
        fontSize: 11, 
        marginTop: 5, 
        textAlign: 'center'
    }

})