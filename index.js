/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import { View } from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList'


const App = () => {
    return(
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
