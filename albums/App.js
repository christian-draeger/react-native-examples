import React, {Component} from 'react';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
import {View} from "react-native";

export default class App extends Component {
    render() {
        return (
            <View style={{ flex:1 }}>
                <Header headerText={'Albums'}/>
                <AlbumList/>
            </View>
        );
    }
}
