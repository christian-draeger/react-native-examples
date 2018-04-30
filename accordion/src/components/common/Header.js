import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const {headerTextStyle, headerContainer} = styles;
    return (
        <View style={headerContainer}>
            <Text style={headerTextStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    headerContainer: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerTextStyle: {
        fontSize: 20
    }
};

export {Header};
