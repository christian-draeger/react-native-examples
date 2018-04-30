import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Header} from './src/components/common';
import LoginForm from './src/components/LoginForm'

export default class App extends Component {

    state = {
        loggedIn: false,
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCmqlmwxg-MFDl-DVU_SlM3UGQZX1VjX5A",
            authDomain: "auth-example-7162a.firebaseapp.com",
            databaseURL: "https://auth-example-7162a.firebaseio.com",
            projectId: "auth-example-7162a",
            storageBucket: "auth-example-7162a.appspot.com",
            messagingSenderId: "515126508896"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Log Out
                </Button>
            );
        }

        return <LoginForm/>;
    }

    render() {
        return (
            <View>
                <Header headerText={"Authentication"}/>
                {this.renderContent()}
            </View>
        );
    }
}
