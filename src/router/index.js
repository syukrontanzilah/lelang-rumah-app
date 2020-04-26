import React, { Component } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {
    Splash,
    Home,
    Bantuan,
    Notifikasi,
    Profile,
    Chat,
    Pencarian,
    Login,
    Register,
    Banner1,
    Banner2,
    Banner3,
    BeritaTerbaru,
    MenuRumah,
    MenuMobil,
    MenuLainnya,
    HotPrice,
    Terdekat,
    Premium,
    InfoTips,
    LelangTerbaru,
    Partner,
    LupaPassword,
    DescRumah
}
    from '../container/page';


const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade
            }}>

            <Stack.Screen
                name='Splash'
                component={Splash} />

            <Stack.Screen
                name='Home'
                component={Home}
            />

            <Stack.Screen
                name='Bantuan'
                component={Bantuan}
            />

            <Stack.Screen
                name='Notifikasi'
                component={Notifikasi}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
            />
            <Stack.Screen
                name='Chat'
                component={Chat}
            />
            <Stack.Screen
                name='Pencarian'
                component={Pencarian}
            />

            <Stack.Screen
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='Register'
                component={Register}
            />
            <Stack.Screen
                name='Banner1'
                component={Banner1}
            />
            <Stack.Screen
                name='Banner2'
                component={Banner2}
            />
            <Stack.Screen
                name='Banner3'
                component={Banner3}
            />

            <Stack.Screen
                name='BeritaTerbaru'
                component={BeritaTerbaru}
            />

            <Stack.Screen
                name='MenuRumah'
                component={MenuRumah}
            />
            <Stack.Screen
                name='MenuMobil'
                component={MenuMobil}
            />
            <Stack.Screen
                name='MenuLainnya'
                component={MenuLainnya}
            />
            <Stack.Screen
                name='HotPrice'
                component={HotPrice}
            />
            <Stack.Screen
                name='Terdekat'
                component={Terdekat}
            />

            <Stack.Screen
                name='Premium'
                component={Premium}
            />

            <Stack.Screen
                name='InfoTips'
                component={InfoTips}
            />

            <Stack.Screen
                name='LelangTerbaru'
                component={LelangTerbaru}
            />
            <Stack.Screen
                name='Partner'
                component={Partner}
            />
            <Stack.Screen
                name='LupaPassword'
                component={LupaPassword}
            />
            <Stack.Screen
                name='DescRumah'
                component={DescRumah}
            />


        </Stack.Navigator>
    )
}

export default Router;