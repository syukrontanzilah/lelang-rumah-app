import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity
}
    from 'react-native';

class Chat extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../asset/icon/chatbckg.png')} style={styles.ImageBckg}>
                <View style={{ flex: 1 }}>

                    <View style={{
                        paddingVertical: 5,
                        backgroundColor: 'darkcyan',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 15,
                            }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                            }}
                                source={require('../../../asset/icon/back.png')} />
                        </TouchableOpacity>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image style={{
                                width: 40,
                                height: 40,
                                borderRadius: 100,
                                marginHorizontal: 10
                            }} source={require('../../../asset/icon/cscantik.jpg')} />

                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                textAlign: 'center',
                            }}>Costomer Service</Text>
                        </View>
                        <View style={{ marginLeft: 35 }} />
                    </View>

                    <ScrollView>

                        {/* Chat area */}

                    </ScrollView>

                    <View style={styles.PamungkusChat}>
                        <View style={styles.WrapperInput}>
                            <TouchableOpacity style={styles.senyumCamera}>
                                <Image style={styles.senyum} source={require('../../../asset/icon/smile.png')} />
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder={'Type a message'}
                                    placeholderTextColor={'#474747'} />
                            </View>
                            <TouchableOpacity style={styles.senyumCamera}>
                                <Image style={styles.camera} source={require('../../../asset/icon/camera.png')} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.PamungkusKirim}>
                            <View style={styles.wrapSend}>
                                <Image style={styles.imagesend} source={require('../../../asset/icon/send.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        )
    }
}

export default Chat;


const styles = StyleSheet.create({
    ImageBckg: {
        flex: 1,
        width: null,
        height: null,
    },
    TextInput: {
        height: 50,
        fontSize: 18,
        paddingHorizontal: 0,
        color: '#474747',
        opacity: 0.6,
        borderRadius: 25,
    },
    PamungkusChat: {
        flexDirection: 'row',
        marginBottom: 5
    },
    WrapperInput: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 25,
        flex: 1, marginLeft: 5
    },
    senyumCamera: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        opacity: 0.5
    },
    senyum: {
        width: 24,
        height: 24,
    },
    camera: {
        width: 25,
        height: 25,
    },
    PamungkusKirim: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    wrapSend: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: 'darkcyan',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagesend: {
        width: 20,
        height: 20,
        opacity: 0.85
    }
})